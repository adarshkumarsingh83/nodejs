var info = 'espark image-serer';

var path = require('path');
var express = require('express');
var app = express();
var fs = require('fs');

var dir = path.join(__dirname, 'public');

var mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};

app.get('*', function (req, res) {
    var file = path.join(dir, req.path.replace(/\/$/, '/index.html'));
    console.log(`Requested Resource path =>  ${file}`);
    if (file.indexOf(dir + path.sep) !== 0) {
        console.log(` =>  ${file}`);
        return res.status(403).end('Forbidden');
    }
    var type = mime[path.extname(file).slice(1)] || 'text/plain';
    var s = fs.createReadStream(file);
    s.on('open', function () {
        res.set('Content-Type', type);
        s.pipe(res);
    });
    s.on('error', function () {
        console.log(`REQUEST RESOURCE NOT FOUND => ${file}`);
        res.set('Content-Type', 'text/plain');
        res.status(404).end(`REQUEST RESOURCE NOT FOUND => ${file}`);
    });
});

app.listen(3000, function () {
    console.log('Listening on http://localhost:3000/');
});

console.log(info);