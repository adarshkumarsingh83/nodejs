//  {go to the application dir and issue the cmd} npm install express
var express = require('express');
var app = express();

// {go to the application dir and issue the cmd} npm install mongojs
var mongojs = require('mongojs');

//which mongodb database and collection we want
var db = mongojs('mongodb://localhost/test', ['user']);

// defining the location for the static resources
app.use(express.static(__dirname + "/public"));

app.get('/login/:name/:pwd', function (request, response) {
    var name = request.params.name;
    var pwd = request.params.pwd;
    console.log('Received Get Request in server ' + name + " " + pwd);
    db.user.findOne({$and: [
        {"name": name},
        {"pwd": pwd}
    ]}, function (error, docs) {
        if (error) {
            console.log('Selection error', error);
        } else {
            console.log('Selection successful');
        }
        console.log("Data from db " + docs.name + " " + docs.pwd);
        if (name == docs.name && pwd == docs.pwd) {
            console.log('login credential match');
            response.json(true);
        } else {
            console.log('login credential not match');
            response.json(false);
        }
    });
});


app.listen(3000);
console.log('server started at 3000 port');