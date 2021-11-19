import { Router, Request, Response } from 'express';
import { UserLogin } from '../request-handlers/user/user-login';
import { userRegister } from '../request-handlers/user/user-register';

const UserRouter = Router();

UserRouter.post('/register', (req: Request, res: Response) => userRegister(req, res));
UserRouter.post('/login', (req: Request, res: Response) => UserLogin(req, res));

export default UserRouter;
