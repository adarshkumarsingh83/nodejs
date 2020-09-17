// npm install express --save
var express = require("express");

// npm install multer --save
var multer = require('multer');

var app = express();

// {go to the application dir and issue the cmd}
// npm install log4js --save
var log4js = require('log4js');
log4js.configure({
    appenders: [{type: 'console'},
        {type: 'file', filename: 'log/express.log', category: 'dev'}]
});
var logger = log4js.getLogger('dev');
logger.setLevel('ALL');
app.use(log4js.connectLogger(logger, {level: log4js.levels.DEBUG}));

var upload = multer({ dest: './public/uploads'});

app.use(express.static(__dirname + "/public"));

app.use(multer({ dest: './public/uploads/',

    rename: function (fieldname, filename) {
        return filename + Date.now();
    },

    onFileUploadStart: function (file) {
        logger.info(file.originalname + ' is starting ...');
    },

    onFileUploadComplete: function (file) {
        logger.info(file.fieldname + ' uploaded to  ' + file.path)
    }
}));

app.get('/', function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.post('/api/photo', function (request, response) {

    logger.info("File Name ");

     upload(request, response, function (error) {
        if (error) {
            return response.end("Error uploading file.");
        }

        response.send("File is uploaded ");
    });
});

app.listen(3000, function () {
    logger.info("Working on port 3000");
});