# NodeJs Basic Example with Docker

---

### Create a application dir

- $ tree

```
nodejs-basic-docker
└── app.js
```

### Create a app.js file

```
const express = require('express');
const app = express();

app.get('/wish', (req, res) => {
    res.send("welcome to espark adarsh ");
});

app.listen(3000, () => {
    console.log("Server started on Port 3000");
})
```

### Open terminal and init the npm

- npm init

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
```

### now package.json file is added in the app

- $ tree

```
nodejs-basic-docker
├── app.js
└── package.json
```

### now install the express

- $ npm install --save express

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

- $ npm run start

### Test the Application with url

- http://localhost:3000/wish

---

# Creating Docker Image & Running Application

### Add the Dockerfile in the application in root dir

- Dockerfile

```
FROM node:9-slim
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm","start"]
```

- tree

```
nodejs-basic-docker
├── Dockerfile
├── app.js
├── node_modules
│   ├── ***
│
├── package-lock.json
└── package.json
```

### Create a docker image

- $ docker build -t nodejs-docker-basic .

### To Run the docker iamge

- docker run -it -p 8080:3000 nodejs-docker-basic

### To Access the Applciation on Docker container

- http://localhost:8080/wish

### To Check Container Running

- docker ps -a

---

# To Do run time changes to the app and in docker image it will reflect to the app

## Nodemon Process for Aapplicatin

- $ npm install --save nodemon
- change the app.js start tag

```
.......
  "scripts": {
    "start": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  .......
```

### To start the application

- $ npm run start
- now without deployment it will do the changes dynamically to the app once we chagen source code

---

## Nodemon Process for docker

### build the docker iamge again

- $ docker build -t nodejs-docker-basic .

### Start the docker container

- $ docker run -it -p 8080:3000 -v $(pwd):/app nodejs-docker-basic
- now do the change in the source code of the app and it will reflect in the docker container also
