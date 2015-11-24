
// {go to the application dir and issue the cmd} npm install express
var express = require('express');
var app = express();

// {go to the application dir and issue the cmd} npm install body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// {go to the application dir and issue the cmd} npm install mongojs
var mongojs = require('mongojs');

//mongodb://[username:password@]host1[:port1][/[database]
var db = mongojs('mongodb://adarsh:radha@localhost:27017/test', ['user'], {authMechanism: 'ScramSHA1'});

// defining the location for the static resources
app.use(express.static(__dirname + "/public"));

/**
 * this post method is for user login authentication by using mongodb
 * db.user.findOne({$and: [{"name": "adarsh"},{"pwd": "radha"} ]});
 */
app.post('/api/authenticate', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    console.log('Received Post Request in server ' + username + ' ' + password);
    db.user.findOne({$and: [
        {"username": username},
        {"password": password}
    ]}, function (error, docs) {
        if (error) {
            console.log('Selection error', error);
        } else {
            console.log((docs != null ? ("Selection successful from db " + docs.username + " " + docs.password) : " User Not Found in Db Result is null"));
            if (docs != null && username == docs.username && password == docs.password) {
                console.log('login credential match');
                response.json(true);
            } else {
                console.log('login credential not match');
                response.json(false);
            }
        }
    });
});

/**
 * this rest end point is for registering the new user
 */
app.post('/api/users', function (request, response) {
    db.user.insert(request.body, function (error, docs) {
        var result;
        if (error) {
            console.log('Insertion error', error);
            result = false;
        } else {
            console.log('Insertion successful');
            result = true;
        }
        console.log("Data from db " + docs);
        response.json(result);
    });
});

/**
 * loading all the users in the home page
 */
app.get('/api/users/getAll', function (request, response) {
    console.log('Received Get Request in server')
    db.user.find(function (error, docs) {
        if (error) {
            console.log('Selection error', error);
        } else {
            console.log('Selection successful ' + docs);
        }
        console.log((docs != null ) ? "Data from db " + docs.toString() : "No Result Found in Db");
        response.json(docs);
    });
});

/**
 * loading only current user information for home page
 */
app.get('/api/users/name/:username', function (request, response) {
    var username = request.params.username;
    console.log('Received Get Request in server ' + username);
    db.user.findOne({"username": username}, function (error, docs) {
        if (error) {
            console.log('Selection error', error);
        } else {
            console.log('Selection successful ' + docs);
        }
        console.log((docs != null ) ? "Data from db " + docs.name + " " + docs.pwd : "No Result Found in Db");
        response.json(docs);
    });
});

/**
 * this rest end point is for fetching of the user based on the id
 */
app.get('/api/users/id/:id', function (request, response) {
    var id = request.params.id;
    console.log('Received Delete Request in server ' + id);
    db.user.findOne({_id: mongojs.ObjectId(id)}, function (error, docs) {
        if (error) {
            console.log('Getting error', error);
        } else {
            console.log('User Fetch successful');
        }
        console.log("Data from db " + docs);
        response.json(docs);
    });
});

/**
 * this rest end point is for deletion the user based on the id
 */
app.delete('/api/users/:id', function (request, response) {
    var id = request.params.id;
    console.log('Received Delete Request in server ' + id);
    db.user.remove({_id: mongojs.ObjectId(id)}, function (error, docs) {
        if (error) {
            console.log('Deletion error', error);
        } else {
            console.log('Deletion successful');
        }
        console.log("Data from db " + docs);
        response.json(docs);
    });
});

/**
 * rest end point for updating the data
 */
app.put('/api/users/:id', function (request, response) {
        var id = request.params.id;
        console.log('Received Put Request in server ' + request.body.username);
        db.user.findAndModify({query: {_id: mongojs.ObjectId(id)}, update: {$set: { username: request.body.username, firstName: request.body.firstName, lastName: request.body.lastName, password: request.body.password}}, new: true}
            , function (error, docs) {
                if (error) {
                    console.log('Update error', error);
                } else {
                    console.log('Update successful');
                }
                console.log("Data from db " + docs);
                response.json(docs);
            });
});

app.listen(3000,'localhost');
console.log('server stared at 3000 port ');
