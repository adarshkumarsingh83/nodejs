
## NODE TYPE SCRIPT BASIC APPLICATION PROCESS 
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
 
### Installing dependencies
* npm i body-parser cors express
* npm i -D @types/body-parser @types/cors @types/express @types/node nodemon ts-node typescript

### Adding npm scripts
* project/package.json 
```
"scripts": {
	"start": "nodemon"
},
```
### Configuring nodemon
* projct/nodemon.json
```
{
	"watch": ["src"],
	"ext": "ts",
	"exec": "ts-node ./src/server.ts"
}
```

## Configuring TypeScript
* $  tsc --init
* proj/tsconfig.json
```
{
	"compilerOptions": {
	"target": "es6",
	"module": "commonjs",
	"outDir": "./dist",
	"resolveJsonModule": true,
	"strict": true,
	"esModuleInterop": true,
	"experimentalDecorators": true,
	"emitDecoratorMetadata": true
	},                         
	"exclude": ["node_modules"], 
	"include": ["src/**/*.ts"]
}
```

### Add .gitignore
* proj/.gitignore
```
	node_modules
	package-lock.json
	dist
```

### Setting up our server
* proj/src/constants/api.constrant.ts
```
	export const PORT = 8080;
	export const WELCOME_MESSAGE = "Welcome to Espark Adarsh";
```
* proj/src/app.ts
```
	import express, { Application } from 'express';
	import bodyParser from 'body-parser';
	import cors from 'cors';
	import { Controller } from './main.controller';

	class App {

	  public app: Application;
	  public controller: Controller;

	  constructor() {
	    this.app = express();
	    this.setConfig();
	    this.controller = new Controller(this.app);
	  }

	  private setConfig() {
	    //Allows us to receive requests with data in json format
	    this.app.use(bodyParser.json({ limit: '50mb' }));

	    //Allows us to receive requests with data in x-www-form-urlencoded format
	    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended:true}));

	    //Enables cors   
	    this.app.use(cors());
	  }
	}

	export default new App().app;
```

* proj/src/server.ts
```
	import app from "./app";
	import { PORT } from "./constants/api.constants";

	app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
```

### Add Controller for rest api 
* proj/src/controller/main.controller.ts
```
	import { Application } from 'express';
	import { AppService } from './services/app.service';

	export class Controller {

	  private appService: AppService;

	  constructor(private app: Application) {
	    this.appService = new AppService();
	    this.routes();
	  }

	  public routes() {
	    this.app.route('/').get(this.appService.welcomeMessage);
	  }
	}
```

### Add Service for api 
* proj/src/servcie/app.service.ts
```
import { Request, Response } from "express";
import { WELCOME_MESSAGE } from "../constants/api.constants";


export class ApiService {
  public welcomeMessage(req: Request, res: Response) {
    return res.status(200).send(WELCOME_MESSAGE);
  }
}
```

### To execute the app 
* npm run start

### app url 
* localhost:8080
