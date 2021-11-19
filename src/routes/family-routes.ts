import { Router, Request, Response } from 'express';
import auth from '../middleware/auth';
import { familyCreate } from '../request-handlers/family/family-create';

const FamilyRouter = Router();

FamilyRouter.post('/create', auth, (req: Request, res: Response) => familyCreate(req, res));

export default FamilyRouter;
