// {go to the application dir and issue the cmd} npm install express
var express = require('express');
var app = express();
app.use(express.static(__dirname + "/public"));

var UserRepository = require('./app/repository/UserRepository');
var User = require('./app/entity/UserEntity');
var logger = require('./app/util/ApplicationUtil');

// {go to the application dir and issue the cmd} npm install body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb'}));

app.post('/post/authentication', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    var user = {username: username, password: password};
    logger.info("Request for User Authentication " + user);
    UserRepository.getUserByNameAndPassword(user, function (responseData) {
        logger.info("Response from the UserRepository " + responseData);
        response.json(responseData);
    });
});


app.get('/get/user/id/:userId', function (request, response) {
    var userId = request.params.userId;
    logger.info("Request for Fetching User ById " + userId);
    UserRepository.getUserById(userId, function (responseData) {
        logger.info("Response Data from UserRepository " + responseData);
        response.json(responseData);
    });


});

app.get('/get/user/username/:username', function (request, response) {
    var username = request.params.username;
    logger.info("Request for Fetching User By Username " + username);
     UserRepository.getUserByName(username,function(responseData){
         logger.info("Response Data from UserRepository " + responseData);
         response.json(responseData);
    });

});

app.get('/get/user/all', function (request, response) {
    logger.info("Request for Fetching All User");
    UserRepository.getAllUser(function(responseData){
        logger.info("Response Data from UserRepository " + responseData);
        response.json(responseData);
    });
});

app.put('/update/user/id/:userId', function (request, response) {
    var userId = request.params.userId;
    var user = request.body;
    logger.info("Request for Updating User ById " + userId + " User " + user);
    UserRepository.findByIdThenUpdateUser(userId, user,function(responseData){
        logger.info("Response Data from UserRepository " + responseData);
        response.json(responseData);
    });
});

app.put('/update/user/username/:username', function (request, response) {
    var username = request.params.username;
    var user = request.body;
    logger.info("Request for Updating User By Username " + username + " User " + user);
    UserRepository.findByNameThenUpdateUser(username, user ,function(responseData){
        logger.info("Response Data from UserRepository " + responseData);
        response.json(responseData);
    });
});


app.delete('/delete/user/id/:userId', function (request, response) {
    var userId = request.params.userId;
    logger.info("Request for Deleting User ById " + userId);
    UserRepository.findAndRemoveById(userId,function(responseData){
        logger.info("Response Data from UserRepository " + responseData);
        response.json(responseData);
    });
});

app.delete('/delete/user/username/:username', function (request, response) {
    var username = request.params.username;
    logger.info("Request for Deleting User ByUserName " + username);
    UserRepository.findAndRemoveByName(username,function(responseData){
        logger.info("Response Data from UserRepository " + responseData);
        response.json(responseData);
    });
});

app.post('/post/user', function (request, response) {
    logger.info("Request for Saving User " + request.body);
    UserRepository.saveUser(request.body,function(responseData){
        logger.info("Response Data from UserRepository " + responseData);
        response.json(responseData);
    });
});

app.listen(3000, 'localhost');
logger.info("localhost:3000");