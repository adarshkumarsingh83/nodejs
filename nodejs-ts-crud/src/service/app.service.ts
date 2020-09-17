import { Request, Response } from "express";
import {WELCOME_MESSAGE} from '../constants/Api.constants'

import { User } from '../bean/user.model';

export class AppService {

   public static usersList = Array<User>();

   constructor(){
    AppService.usersList.push(new User('10','adarsh kumar','adarsh@kumar') );
    AppService.usersList.push(new User('20','radha singh','radha@singh') );
    AppService.usersList.push(new User('30','amit kumar','amit@kumar') );
   }


  public welcomeMessage(req: Request, res: Response) {
    return res.status(200).send(WELCOME_MESSAGE);
  }

  public getAllUsers(req: Request, res: Response) {
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json(AppService.usersList);
  }

  public getUser(req: Request, res: Response) {
    const userId = req.params.id;
    var user = null;
    for (var i = 0; i < AppService.usersList.length; i++) {
      if (AppService.usersList[i].id == userId){
        user =  AppService.usersList[i];
      }         
    }
    return res.status(200).json(user);
  }

  public updateUser(req: Request, res: Response) {
    const userId = req.params.id;
    const user = req.body;
    var updatedUser = null;
      for (var i = 0; i < AppService.usersList.length; i++) {
        if (AppService.usersList[i].id == userId){
          AppService.usersList[i] = user ;
          updatedUser =  AppService.usersList[i];
        }         
      }
    return res.status(200).json(updatedUser);
  }

  public deleteUser(req: Request, res: Response) {
    const userId = req.params.id;
    var user = null;
    for (var i = 0; i < AppService.usersList.length; i++) {
      if (AppService.usersList[i].id == userId){
           user =  AppService.usersList[i];
          AppService.usersList.splice(i,1);
      }         
    }
    return res.status(200).json(user);
  }

  public createUser(req: Request, res: Response) {
    const user = req.body;
    AppService.usersList .push(user);
    return res.status(201).json(user);
  }
}