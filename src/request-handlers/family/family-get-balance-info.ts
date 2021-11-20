import { Request, Response } from 'express';
import { Deposit } from '../../models/deposit';
import { Expense } from '../../models/expense';
import { Family } from '../../models/family';

export const familyGetBalanceInfo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { family } = req.params;
    const familyToGetData = await Family.findOne({ name: family });

    if (!familyToGetData) {
      res.send({ errorNum: 6 });
      return;
    }

    const dataToSend = [];

    for (let i = 0; i < familyToGetData.expenses.length; i++) {
      const expense = await Expense.findById(familyToGetData.expenses[i]);
      dataToSend.push(expense);
    }

    for (let i = 0; i < familyToGetData.deposits.length; i++) {
      const deposit = await Deposit.findById(familyToGetData.deposits[i]);
      dataToSend.push(deposit);
    }

    dataToSend.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    res.send(dataToSend);
  } catch (error) {
    res.send({ errorNum: 1 });
  }
};
