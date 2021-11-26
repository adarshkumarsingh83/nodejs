
# NODEJS EXPRESSJS TYPESCRIPT EXAMPLE APPLICATIONS 




## [Angular Js Node File Upload Example](https://github.com/adarshkumarsingh83/nodejs/tree/master/APPLICATIONS/AngularJsNodeFileUploadExample)
## [Angular Node MySql Example](https://github.com/adarshkumarsingh83/nodejs/tree/master/APPLICATIONS/AngularNodeMySqlExample)
## [Espark Momgo Express Angular Node Js Application](https://github.com/adarshkumarsingh83/nodejs/tree/master/APPLICATIONS/EsparkMomgoExpressAngularNodeJsApplication)
## [Esparks Node js Angular Token Authentication Application](https://github.com/adarshkumarsingh83/nodejs/tree/master/APPLICATIONS/EsparksNodejsAngularTokenAuthenticationApplication)
## [Express Application](https://github.com/adarshkumarsingh83/nodejs/tree/master/APPLICATIONS/ExpressApplication)
## [Express Basic Application](https://github.com/adarshkumarsingh83/nodejs/tree/master/APPLICATIONS/ExpressBasicApplication)
## [Mean Crud Example](https://github.com/adarshkumarsingh83/nodejs/tree/master/APPLICATIONS/MeanCrudExample)
## [Mean Crud Token Authentication Example](https://github.com/adarshkumarsingh83/nodejs/tree/master/APPLICATIONS/MeanCrudTokenAuthenticationExample)
## [Mean Image Saving Example](https://github.com/adarshkumarsingh83/nodejs/tree/master/APPLICATIONS/MeanImageSavingExample)
## [Mongo Express Angular Node Application](https://github.com/adarshkumarsingh83/nodejs/tree/master/APPLICATIONS/MongoExpressAngularNodeApplication)
## [Node Js Basic](https://github.com/adarshkumarsingh83/nodejs/tree/master/APPLICATIONS/NodeJsBasic)
## [Nodejs express iamge server](https://github.com/adarshkumarsingh83/nodejs/tree/master/APPLICATIONS/image-server)
## [Nodejs express docker ](https://github.com/adarshkumarsingh83/nodejs/tree/master/APPLICATIONS/nodejs-docker)
## [Nodejs Express inmememoary crud operation](https://github.com/adarshkumarsingh83/nodejs/tree/master/APPLICATIONS/nodejs-express-crud)
## [Nodejs Typescript Express inmememoary crud operation](https://github.com/adarshkumarsingh83/nodejs/tree/master/APPLICATIONS/nodejs-ts-crud)

----

# NodeJs Basic Example With Express 

----

### Create a application dir 
* $ tree 
```
nodejs-basic-docker
└── app.js
```

### Create a app.js file 
````
const express = require('express');
const app = express();

app.get('/wish', (req, res) => {
    res.send("welcome to espark adarsh ");
});

app.listen(3000, () => {
    console.log("Server started on Port 3000");
})
````

### Open terminal and init the npm 
* npm init 
```
nodejs-basic-docker us-guest$ npm init 
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodejs-basic-docker)                 <-| press Enter 
version: (1.0.0) 									<-| press Enter 
description: nodejs basic docker example            
entry point: (app.js)                               <-| press Enter 
test command:                                       <-| press Enter 
git repository: 									<-| press Enter 
keywords: nodejs docker basic example 
author: adarsh kumar
license: (ISC)  									<-| press Enter 
About to write to /Users/us-guest/WORK/GIT/nodejs/APPLICATIONS/nodejs-basic-docker/package.json:

{
  "name": "nodejs-basic-docker",
  "version": "1.0.0",
  "description": "nodejs basic docker example ",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "nodejs",
    "docker",
    "basic",
    "example"
  ],
  "author": "adarsh kumar",
  "license": "ISC"
}


Is this OK? (yes) yes                              <-| 
````

### now package.json file is added in the app 
* $ tree 
```
nodejs-basic-docker
├── app.js
└── package.json
```

### now install the express 
* $ npm install --save express 

### add the app.js file in the package.json in start tag 
```
.......
  "scripts": {
    "start": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  .......
```

### To start the application 
* $ npm run start 


### Test the Application with url 
* http://localhost:3000/wish
