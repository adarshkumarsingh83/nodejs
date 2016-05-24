/**
 * @author Adarsh Kumar
 * @author $LastChangedBy: Adarsh Kumar$
 * @version $Revision: 0001 $, $Date:: 1/1/10 0:00 AM#$
 * @Espark @copyright all right reserve
 */
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


//npm install jsonwebtoken (https://npmjs.org/package/node-jsonwebtoken)
var jwt = require('jsonwebtoken');
// npm install express-jwt (https://npmjs.org/package/express-jwt)
var expressJwt = require('express-jwt');
var secret = 'secret admin@12345';
// We are going to protect /api routes with JWT
app.use('/api', expressJwt({secret: secret}));


app.use(function (error, request, response, next) {
    if (error.constructor.name === 'UnauthorizedError') {
        logger.error('UnauthorizedError');
        response.status(401).send('Unauthorized Access');
    } else {
        logger.error('Authorized Request ' + request.uri);
        next();
    }
});

/**
 * this method is for user authentication based on the
 * user name and pwd and generate the token
 */
app.post('/post/authentication', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    var user = {username: username, password: password};
    logger.info("Request for User Authentication " + user);
    UserRepository.getUserByNameAndPassword(user, function (user) {
        logger.info("Response from the UserRepository " + user);
        if (user != null && user != "") {
            logger.info("Response from the UserRepository User Not Empty or Null " + user);
            var profile = {
                name: user.name,
                username: user.username,
                password: user.password,
                id: user._id
            };
            // We are sending the profile inside the token
            var token = jwt.sign(profile, secret, { expiresIn: 60 * 60 * 5 });
            response.json({ token: token });
        } else {
            logger.info("Response from the UserRepository User is Null or Empty " + user);
            response.json(null);
        }
    });
});

/**
 * this method is for getting the user based on userid
 */
app.get('/api/get/user/id/:userId', function (request, response) {
    var userId = request.params.userId;
    logger.info("Request for Fetching User ById " + userId);
    UserRepository.getUserById(userId, function (responseData) {
        logger.info("Response Data from UserRepository " + responseData);
        response.json(responseData);
    });


});

/**
 * this method is for getting the user based on username
 */
app.get('/api/get/user/username/:username', function (request, response) {
    var username = request.params.username;
    logger.info("Request for Fetching User By Username " + username);
    UserRepository.getUserByName(username, function (responseData) {
        logger.info("Response Data from UserRepository " + responseData);
        response.json(responseData);
    });

});

/**
 * this method is for getting all the users of the system
 */
app.get('/api/get/user/all', function (request, response) {
    logger.info("Request for Fetching All User");
    UserRepository.getAllUser(function (responseData) {
        logger.info("Response Data from UserRepository " + responseData);
        response.json(responseData);
    });
});

/**
 * this method is for updating the user based on userid
 */
app.put('/api/update/user/id/:userId', function (request, response) {
    var userId = request.params.userId;
    var user = request.body;
    logger.info("Request for Updating User ById " + userId + " User " + user);
    UserRepository.findByIdThenUpdateUser(userId, user, function (responseData) {
        logger.info("Response Data from UserRepository " + responseData);
        response.json(responseData);
    });
});

/**
 * this method is for updating the user based on username
 */
app.put('/api/update/user/username/:username', function (request, response) {
    var username = request.params.username;
    var user = request.body;
    logger.info("Request for Updating User By Username " + username + " User " + user);
    UserRepository.findByNameThenUpdateUser(username, user, function (responseData) {
        logger.info("Response Data from UserRepository " + responseData);
        response.json(responseData);
    });
});

/**
 * this method is for deletion the user based on userid
 */
app.delete('/api/delete/user/id/:userId', function (request, response) {
    var userId = request.params.userId;
    logger.info("Request for Deleting User ById " + userId);
    UserRepository.findAndRemoveById(userId, function (responseData) {
        logger.info("Response Data from UserRepository " + responseData);
        response.json(responseData);
    });
});

/**
 * this method is for deletion the user based on use name
 */
app.delete('/api/delete/user/username/:username', function (request, response) {
    var username = request.params.username;
    logger.info("Request for Deleting User ByUserName " + username);
    UserRepository.findAndRemoveByName(username, function (responseData) {
        logger.info("Response Data from UserRepository " + responseData);
        response.json(responseData);
    });
});

/**
 * this method is for saving the user
 */
app.post('/post/user', function (request, response) {
    logger.info("Request for Saving User " + request.body);
    UserRepository.saveUser(request.body, function (responseData) {
        logger.info("Response Data from UserRepository " + responseData);
        response.json(responseData);
    });
});

/**
 * server configuration with port and host
 */
app.listen(3000, 'localhost');
logger.info("localhost:3000");