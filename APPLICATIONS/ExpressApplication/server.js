/**
 * Created by Adarsh on 11/10/15.
 */

//  {go to the application dir and issue the cmd} npm install express
var express = require('express');

// {go to the application dir and issue the cmd} npm install mongojs
var mongojs = require('mongojs');

// {go to the application dir and issue the cmd} npm install body-parser
var bodyParser = require('body-parser');

var app = express();

//which mongodb database and collection we want
var db = mongojs('mongodb://localhost/test', ['contactList']);

//check the static resources from public dir
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// {go to the application dir and issue the cmd} npm install log4js --save
var log4js = require('log4js');
log4js.configure({
    appenders: [{type: 'console'},
        {type: 'file', filename: 'log/express.log', category: 'dev'}]
});
var logger = log4js.getLogger('dev');
logger.setLevel('ALL');
app.use(log4js.connectLogger(logger, {level: log4js.levels.DEBUG}));

app.get('/contactList', function (request, response) {
    console.log('Received Get Request in server')
    db.contactList.find(function (error, docs) {
        if (error) {
            console.log('Selection error', error);
        } else {
            console.log('Selection successful');
        }
        console.log("Data from db " + docs.name+" "+docs.pwd);
        response.json(docs);
    });
});

app.post('/contactList', function (request, response) {
    console.log('Received Post Request in server ' + request.body);
    db.contactList.insert(request.body, function (error, docs) {
        if (error) {
            console.log('Insertion error', error);
        } else {
            console.log('Insertion successful');
        }
        console.log("Data from db " + docs);
        response.json(docs);
    });

});

app.delete('/contactList/:id', function (request, response) {
    var id = request.params.id;
    console.log('Received Delete Request in server ' + id);
    db.contactList.remove({_id: mongojs.ObjectId(id)}, function (error, docs) {
        if (error) {
            console.log('Deletion error', error);
        } else {
            console.log('Deletion successful');
        }
        console.log("Data from db " + docs);
        response.json(docs);
    });

});

app.get('/contactList/:id', function (request, response) {
    var id = request.params.id;
    console.log('Received Get Request in server ' + id);
    db.contactList.findOne({_id: mongojs.ObjectId(id)}, function (error, docs) {
        if (error) {
            console.log('Selection error', error);
        } else {
            console.log('Selection successful');
        }
        console.log("Data from db " + docs);
        response.json(docs);
    });

});

app.put('/contactList/:id', function (request, response) {
    var id = request.params.id;
    console.log('Received Put Request in server ' + request.body.name);
    db.contactList.findAndModify({query: {_id: mongojs.ObjectId(id)}, update: {$set: { name: request.body.name, email: request.body.email, phone: request.body.phone }}, new: true}
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

app.listen(3000,"localhost");
console.log('server started at 3000 port ');
logger.info('server stared at 3000 port ');