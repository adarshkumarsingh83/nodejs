//importing the http module for creating server
// npm install bootstrap --save
//npm install jquery --save

// npm install http --save
var httpObject = require('http');

//importing the filesystem module for reading the index.html file
// npm install fs --save
var fileSystem = require('fs');

//importing connect module
// npm install connect --save
var connectObject = require('connect');

var app = connectObject();

function urlFilter(request,response,next){
    if (request.method == 'GET' && request.url == '/index') {
        next();
    }
    else {
        resourceNotFound(request, response);
    }
}

function doFilter1(request, response, next) {
    console.log("doFilter1()is executing => " + request.method);
    var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    console.log('Client IP:', ip);
    next();
}

function doFilter2(request, response, next) {
    console.log("doFilter2() is executing => " + request.method);
    next();
}


app.use(doFilter1);
app.use(doFilter2);
app.use(urlFilter);
app.use('/index', onRequest);

// fallback function for resource not found
function resourceNotFound(request, response) {
    console.log("Request Received for " + request.url);
    response.writeHead(404, {"content-type": "text/html"});
    fileSystem.createReadStream('resourceNotFound.html').pipe(response);
}



// callback method for all the request received on the server
function onRequest(request, response) {
    console.log("Request Received for " + request.url);
    response.writeHead(200, {"content-type": "text/html"});
    fileSystem.createReadStream('index.html').pipe(response);
}


//creating the http server instance and starting it over the 9090 port
httpObject.createServer(app).listen(9090);

//printing the log msg over the server console
console.log("Http Server started on port 9090");


