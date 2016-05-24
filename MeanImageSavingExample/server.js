// note following need to install => npm install ng-file-upload

// npm install express
var express = require('express');
var app = express();

// npm install express
var fs = require('fs');

// npm install body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));

// npm install mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// connect to mongo
mongoose.connect('mongodb://adarsh:radha@127.0.0.1:27017/test');

// example schema
var schema = new Schema({
    img: { data: Buffer, contentType: String}
});

// our model
var A = mongoose.model('A', schema);


app.use(express.static(__dirname + "/public"));

// img path
var imgPath = __dirname + "/public/image/adarsh.JPG";

// {go to the application dir and issue the cmd} npm install log4js
var log4js = require('log4js');
log4js.configure({
    appenders: [
        {type: 'console'},
        {type: 'file', filename: 'log/express.log', category: 'dev'}
    ]
});
var logger = log4js.getLogger('dev');
logger.setLevel('ALL');
app.use(log4js.connectLogger(logger, {level: log4js.levels.DEBUG}));

mongoose.connection.on('open', function () {
    logger.info('mongo is open');

    // empty the collection
    A.remove(function (err) {
        if (err) {
            throw err;
        } else {
            logger.info('removed old docs');
        }

        // store an img in binary in mongo
        var a = new A;
        a.img.data = fs.readFileSync(imgPath);
        a.img.contentType = 'image/png';
        a.save(function (err, a) {
            if (err) {
                logger.error(err.toString());
                throw err;
            } else {
                logger.info('saved img to mongo');
            }

            // start a demo server
            app.get('/api/users', function (req, res, next) {
                A.findById(a, function (err, doc) {
                    if (err) {
                        return next(err);
                    } else {
                        var base64 = (doc.img.data.toString('base64'));
                        var person = {
                            firstName: "adarsh ", lastName: " kumar", image: base64
                        };
                        res.send(person);
                    }
                });
            });

            app.post('/api/users', function (req, res) {
                logger.info('Received Post Request for saving image ' + req.body);
                var a = new A();
                a.img.data = req.body.file;
                a.img.contentType = 'image/png';
                a.save(function (err) {
                    if (err) {
                        logger.error(err.toString());
                        throw err;
                    } else {
                        logger.info('saved img to mongo');
                    }
                });
                    res.redirect('/');
            });


            app.on('close', function () {
                logger.info('dropping db');
                mongoose.connection.db.dropDatabase(function () {
                    logger.info('closing db connection');
                    mongoose.connection.close();
                });
            });

            app.listen(8080, function (err) {
                logger.info('press CTRL+C to exit 8080');
            });

            app.on('SIGINT', function () {
                app.close();
            });
        });
    });

});
