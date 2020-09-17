// npm install express
var express = require('express');
// npm install body-parser
var bodyParser = require('body-parser');

//npm install jsonwebtoken (https://npmjs.org/package/node-jsonwebtoken)
var jwt = require('jsonwebtoken');

// npm install express-jwt (https://npmjs.org/package/express-jwt)
var expressJwt = require('express-jwt');


var secret = 'this is the secret secret secret 12356';

var app = express();

// We are going to protect /api routes with JWT
app.use('/api', expressJwt({secret: secret}));

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/'));

// {go to the application dir and issue the cmd} npm install log4js
var log4js = require('log4js');
log4js.configure({
    appenders: [{type: 'console'},
        {type: 'file', filename: 'log/express.log', category: 'dev'}]
});
var logger = log4js.getLogger('dev');
logger.setLevel('ALL');
app.use(log4js.connectLogger(logger, {level: log4js.levels.DEBUG}));

// defining the location for the static resources
app.use(express.static(__dirname + "/public"));

app.use(function (err, req, res, next) {
    if (err.constructor.name === 'UnauthorizedError') {
        logger.error('UnauthorizedError');
        res.status(401).send('Unauthorized');
    }
});

app.post('/authenticate', function (req, res) {

    //if is invalid, return 401
    if (!(req.body.username === 'adarsh' && req.body.password === 'radha')) {
        logger.error('Wrong user or password');
        res.status(401).send('Wrong user or password');
        return;
    }

    var profile = {
        first_name: 'Adarsh',
        last_name: 'Kumar',
        email: 'adarsh@kumar.com',
        id: 123
    };

    // We are sending the profile inside the token
    var token = jwt.sign(profile, secret, { expiresInMinutes: 60 * 5 });

    res.json({ token: token });
});

app.get('/api/restricted', function (req, res) {
    logger.info('user ' + req.user.email + ' is calling /api/restricted');
    res.json({
        name: 'Welcome To Home Page Adarsh kumar'
    });
});

app.listen(8080, 'localhost', function () {
    logger.info('listening on http://localhost:8080');
});
