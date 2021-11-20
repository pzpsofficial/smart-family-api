import { Router, Request, Response } from 'express';
import auth from '../middleware/auth';
import { familyCreate } from '../request-handlers/family/family-create';
import { familyGetBalanceInfo } from '../request-handlers/family/family-get-balance-info';
import { familyJoin } from '../request-handlers/family/family-join';

const FamilyRouter = Router();

FamilyRouter.get('/get-balance-info/:family', auth, (req: Request, res: Response) => familyGetBalanceInfo(req, res));

FamilyRouter.post('/create', auth, (req: Request, res: Response) => familyCreate(req, res));
FamilyRouter.post('/join', auth, (req: Request, res: Response) => familyJoin(req, res));

export default FamilyRouter;
