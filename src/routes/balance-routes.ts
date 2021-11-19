import { Router, Request, Response } from 'express';
import { makeExpense } from '../request-handlers/balances/make-expense';

const BalanceRouter = Router();

BalanceRouter.post('/add-expense', (req: Request, res: Response) => makeExpense(req, res));

export default BalanceRouter;
