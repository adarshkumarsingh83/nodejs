import express, { Application } from 'express';
import { AppController } from './controller/main.controller';
import bodyParser from 'body-parser';
import cors from 'cors';

class App {
  public app: Application;
  public appController: AppController;

  constructor() {
    this.app = express();
    this.setConfig();
    this.appController = new AppController(this.app);
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