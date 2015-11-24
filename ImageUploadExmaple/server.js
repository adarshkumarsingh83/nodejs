// {go to the application dir and issue the cmd} npm install express
var express = require('express');
var app = express();
app.use(express.static(__dirname + "/public"));



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

//npm install multer
var multer = require('multer');

// {go to the application dir and issue the cmd} npm install body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(multer({ dest: './uploads/' }));


// npm install fs
var fs = require('fs');
///npm install imagemagick
var im = require('imagemagick');



/// Post files
app.post('/upload', function (req, res) {
    logger.info(req.files);
    fs.readFile(req.files.image.path, function (err, data) {
        logger.info(req.toString());
        var imageName = req.files.image.name
        /// If there's an error
        if (!imageName) {
            console.log("There was an error")
            res.redirect("/");
            res.end();
        } else {
            var newPath = __dirname + "/uploads/fullsize/" + imageName;
            var thumbPath = __dirname + "/uploads/thumbs/" + imageName;
            /// write file to uploads/fullsize folder
            fs.writeFile(newPath, data, function (err) {
                /// write file to uploads/thumbs folder
                im.resize({
                    srcPath: newPath,
                    dstPath: thumbPath,
                    width: 200
                }, function (err, stdout, stderr) {
                    if (err) throw err;
                    console.log('resized image to fit within 200x200px');
                });
                res.redirect("/uploads/fullsize/" + imageName);
            });
        }
    });
});

/// Show files
app.get('/uploads/fullsize/:file', function (req, res) {
    file = req.params.file;
    var img = fs.readFileSync(__dirname + "/uploads/fullsize/" + file);
    res.writeHead(200, {'Content-Type': 'image/jpg' });
    res.end(img, 'binary');
});

app.get('/uploads/thumbs/:file', function (req, res) {
    file = req.params.file;
    var img = fs.readFileSync(__dirname + "/uploads/thumbs/" + file);
    res.writeHead(200, {'Content-Type': 'image/jpg' });
    res.end(img, 'binary');
});

app.listen(8080);