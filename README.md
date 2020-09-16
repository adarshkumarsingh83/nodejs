
OWNER : ADARSH KUMAR 

EMAIL : ADARSHKUMARSINGH83@GMAIL.COM


**[Espark Youtube MEAN STACK ](https://www.youtube.com/playlist?list=PLBH_SvM38ibH1aaaXBmQd6SzXO3TXutLy)**

NODE-JS EXAMPLE , ANGULAR-JS , MONGODB MEAN STACK
---------------------------------------------

- Angular Js Node File Upload Example	
- Angular Node MySql Example	
- Espark Momgo Express Angular Node Js Application	
- Esparks Node js Angular Token Authentication Application
- Express Application	
- Express Basic Application	
- Mean Crud Example	
- Mean Crud Token Authentication Example	
- Mean Image Saving Example
- Mongo Express Angular Node Application	
- Node Js Basic

---

## Npm init Command 
* name: the current directory name
* version: always 1.0.0
* description: info from the README, or an empty string ""
* main: always index.js
* scripts: by default creates an empty test script
* keywords: empty
* author: empty
* license: ISC
* bugs: information from the current directory, if present
* homepage: information from the current directory, if present

### Example 
* $ npm init 
```
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (sample) sample
version: (1.0.0) 
description: sample nodejs application 
entry point: (index.js) app.js
test command: 
git repository: github.com/adarshkumarsingh83
keywords: nodejs
author: espark adarsh 
license: (ISC) 
About to write to /Users/us-guest/WORK/sample/package.json:

{
  "name": "sample",
  "version": "1.0.0",
  "description": "sample nodejs application ",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/github.com/adarshkumarsingh83.git"
  },
  "keywords": [
    "nodejs"
  ],
  "author": "espark adarsh",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/github.com/adarshkumarsingh83/issues"
  },
  "homepage": "https://github.com/github.com/adarshkumarsingh83#readme"
}


Is this OK? (yes) yes
```
* sample$ ls 
  * package.json

### Install expressjs 
* $ npm install express --save 
```
npm notice created a lockfile as package-lock.json. You should commit this file.
+ express@4.17.1
added 50 packages from 37 contributors and audited 50 packages in 2.831s
found 0 vulnerabilities
```

* sample$ touch app.js 
```
const express = require('express')
const PORT = 3000

const app = express()

app.get('/espark', (req, res) => {
    res.send("welcome to espark")
})

app.listen(PORT, () => {
    console.log(`App is listening on port : ${PORT}`)
})
```

### To execute 
* sample$ npm appjs 

### application url 
* $ curl http://localhost:3000/espark