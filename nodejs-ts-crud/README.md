* $ mkdir nodejs-ts-crud
* $ cd nodejs-ts-crud/
* $ npm init 
```
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodejs-ts-crud) 
version: (1.0.0) 
description: nodejs typescript crud operation 
entry point: (index.js) app.js
test command: npm test
git repository: github.com/adarshkumarsingh83/nodejs
keywords: nodejs typescript crud 
author: espark adarsh 
license: (ISC) 
About to write to /Users/us-guest/WORK/GIT/nodejs/nodejs-ts-crud/package.json:

{
  "name": "nodejs-ts-crud",
  "version": "1.0.0",
  "description": "nodejs typescript crud operation ",
  "main": "app.js",
  "scripts": {
    "test": "npm test"
  },
  "repository": {
    "type": "git",
    "url": "github.com/adarshkumarsingh83/nodejs"
  },
  "keywords": [
    "nodejs",
    "typescript",
    "crud"
  ],
  "author": "espark adarsh",
  "license": "ISC"
}


Is this OK? (yes) yes 
```
 
 ### installing dependencies 
 * npm i body-parser cors express --save
 * npm i -D @types/body-parser @types/cors @types/express @types/node nodemon ts-node typescript


### Configuring TypeScript
* $ tsc --init
```
message TS6071: Successfully created a tsconfig.json file.
```

### To execute 
* $ npm run start 
