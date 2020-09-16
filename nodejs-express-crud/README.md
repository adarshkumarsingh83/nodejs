

* $  mkdir nodejs-express-crud 
* :nodejs$ cd nodejs-express-crud/
* nodejs-express-crud us-guest$ npm init 
```
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodejs-express-crud) 
version: (1.0.0) 
description: nodejs express in memo crud operation 
entry point: (index.js) app.js 
test command: npm run test
git repository: github.com/adarshkumarsingh83/nodejs
keywords: nodejs express crud inmemo 
author: espark adarsh 
license: (ISC) 
About to write to /Users/us-guest/WORK/GIT/nodejs/nodejs-express-crud/package.json:

{
  "name": "nodejs-express-crud",
  "version": "1.0.0",
  "description": "nodejs express in memo crud operation ",
  "main": "app.js ",
  "scripts": {
    "test": "npm run test"
  },
  "repository": {
    "type": "git",
    "url": "github.com/adarshkumarsingh83/nodejs"
  },
  "keywords": [
    "nodejs",
    "express",
    "crud",
    "inmemo"
  ],
  "author": "espark adarsh",
  "license": "ISC"
}

Is this OK? (yes) yes
```
### To install express 
* $  npm i express --save 

### To install body parser 
* $ npm i body-parser --save 

### To install log4js 
* $ npm i log4js --save 



### Fetch all data 
* $ curl localhost:3000/users
```
[
  {
    "id": 10,
    "name": "adarsh kumar",
    "email": "adarsh@kumar"
  },
  {
    "id": 20,
    "name": "radha singh",
    "email": "radha@singh"
  },
  {
    "id": 30,
    "name": "amit kumar",
    "email": "amit@kumar"
  }
]
```

### get only data by id 
* $ curl localhost:3000/user/10
```
{"id":10,"name":"adarsh kumar","email":"adarsh@kumar"}
```

### create new data 
* curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"id":40,"name":"sonu singh","email":"sonu@singh"}' \
  http://localhost:3000/user

  ```
  {"id":40,"name":"sonu singh","email":"sonu@singh"}
  ```

  ### Update data 
  * curl --header "Content-Type: application/json" \
  --request PUT \
  --data '{"id":40,"name":"sonu singh","email":"sonu@singh.thankur"}' \
  http://localhost:3000/user/40 
  
  ```
  {"id":40,"name":"sonu singh","email":"sonu@singh.thankur"}
  ```

  ### Delete data 
  * curl --request DELETE   http://localhost:3000/user/40 
  ```
  {"id":40,"name":"sonu singh","email":"sonu@singh.thankur"}
  ```


  ### To install dependency 
  * npm i 