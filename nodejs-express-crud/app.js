
var dataService = require('./service/DataService');

var express = require('express');
var app = express();


var log4js = require('log4js');
log4js.configure({
  appenders: { fileAppender: { type: "file", filename: "log/express.log" } },
  categories: { default: { appenders: ["fileAppender"], level: "debug" } }
});
const logger = log4js.getLogger("fileAppender");

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb'}));



app.get('/user/:userId', function (request, response) {
    var userId = request.params.userId;
    logger.info("Request for Fetching User ById " + userId);
    var user = dataService.getUserById(userId);
    response.json(user);
});

app.get('/users', function (request, response) {
    logger.info("Request for Fetching All User");
    var userList = dataService.getAllUsers();
    response.json(userList);
});

app.put('/user/:userId', function (request, response) {
    var userId = request.params.userId;
    var user = request.body;
    logger.info("Request for Updating User ById " + userId + " User " + user);
    var userData = dataService.updateUser(userId,user);
    response.json(userData);
});

app.delete('/user/:userId', function (request, response) {
    var userId = request.params.userId;
    logger.info("Request for Deleting User ById " + userId);
    var user = dataService.deleteUser(userId);
    response.json(user);
});


app.post('/user', function (request, response) {
    var user = request.body;
    logger.info("Request for Saving User " + user);
    var userData = dataService.saveUser(user);
    response.json(userData);
});


app.listen(3000, 'localhost');
logger.info("localhost:3000");
console.log("server started..")