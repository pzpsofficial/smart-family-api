import { Router, Request, Response } from 'express';
import auth from '../middleware/auth';
import { familyCreate } from '../request-handlers/family/family-create';
import { familyJoin } from '../request-handlers/family/family-join';

const FamilyRouter = Router();

FamilyRouter.post('/create', auth, (req: Request, res: Response) => familyCreate(req, res));
FamilyRouter.post('/join', auth, (req: Request, res: Response) => familyJoin(req, res));

export default FamilyRouter;
