# nodejs-server-side-event

---

### To intit the code

- npm init

```
The default interactive shell is now zsh.
To update your account to use zsh, please run `chsh -s /bin/zsh`.
For more details, please visit https://support.apple.com/kb/HT208050.
USMB113823:nodejs-sse us-guest$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodejs-sse)
version: (1.0.0)
description: nodejs sse
entry point: (app.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /Users/us-guest/Desktop/nodejs-sse/package.json:

{
  "name": "nodejs-sse",
  "version": "1.0.0",
  "description": "nodejs sse ",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

```

### added the package

- npm install express --save
- npm install body-parser --save
- npm install events --save
- npm install --save cors

### To start the application

- npm install
- node app.js

### application url

- http://localhost:8080/espark

```
 event  message
data:{"msg":"welcome to espark"}

 event  message
data:{"msg":"welcome to espark"}

 event  message
data:{"msg":"welcome to espark"}

 event  message
data:{"msg":"welcome to espark"}

 event  message
data:{"msg":"welcome to espark"}

```

- $ curl -X GET http://localhost:8080/espark

```
event  message
data:{"msg":"welcome to espark"}

 event  message
data:{"msg":"welcome to espark"}

 event  message
data:{"msg":"welcome to espark"}

 event  message
data:{"msg":"welcome to espark"}

 event  message
data:{"msg":"welcome to espark"}
```
