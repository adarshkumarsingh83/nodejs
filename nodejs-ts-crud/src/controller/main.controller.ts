import { Application } from 'express';
import {AppService} from '../service/app.service';

export class AppController {

  private appService: AppService;

  constructor(private app: Application) {
      this.appService= new AppService();
    this.routes();
  }

  public routes() {
    this.app.route('/').get(this.appService.welcomeMessage);
    this.app.route('/users').get(this.appService.getAllUsers);
    this.app.route('/user/:id').get(this.appService.getUser);
    this.app.route('/user/:id').put(this.appService.updateUser);
    this.app.route('/user/:id').delete(this.appService.deleteUser);
    this.app.route('/user').post(this.appService.createUser);
  }
}