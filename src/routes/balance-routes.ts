import { Router, Request, Response } from 'express';
import { makeDeposit } from '../request-handlers/balances/make-deposit';
import { makeExpense } from '../request-handlers/balances/make-expense';

const BalanceRouter = Router();

BalanceRouter.post('/add-expense', (req: Request, res: Response) => makeExpense(req, res));
BalanceRouter.post('/add-deposit', (req: Request, res: Response) => makeDeposit(req, res));

export default BalanceRouter;
