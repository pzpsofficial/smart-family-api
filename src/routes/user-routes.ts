import { Router, Request, Response } from 'express';
import { userRegister } from '../request-handlers/user/user-register';

const UserRouter = Router();

UserRouter.post('/register', (req: Request, res: Response) => userRegister(req, res));

export default UserRouter;
