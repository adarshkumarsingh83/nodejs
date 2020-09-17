import { Request, Response } from "express";
import {WELCOME_MESSAGE} from '../constants/Api.constants'

export class AppService {


  public welcomeMessage(req: Request, res: Response) {
    return res.status(200).send(WELCOME_MESSAGE);
  }

  public getAllUsers(req: Request, res: Response) {
    return res.status(200).send('return all user list');
  }

  public getUser(req: Request, res: Response) {
    const userId = req.params.id;
    return res.status(200).send('return user ');
  }

  public updateUser(req: Request, res: Response) {
    const userId = req.params.id;
    const user = req.body;
    return res.status(200).send('return update user ');
  }

  public deleteUser(req: Request, res: Response) {
    const userId = req.params.id;
    return res.status(200).send('return delete user ');
  }

  public createUser(req: Request, res: Response) {
    const user = req.body;
    return res.status(200).send('return created user');
  }
}