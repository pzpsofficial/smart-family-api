import { Request, Response } from 'express';
import { Family } from '../../models/family';

export const makeExpense = async (req: Request, res: Response) => {
  try {
    const { madeBy, madeOn, value, family } = req.body;

    if (!madeBy || !madeOn || !value) {
      res.send({ errorNum: 2 });
      return;
    }

    const familyToUpdate = await Family.findOne({ name: family });

    if (!familyToUpdate) {
      res.send({ errorNum: 6 });
      return;
    }

    if (familyToUpdate.balance - value < 0) {
      res.send({ errorNum: 12 });
      return;
    }

    familyToUpdate.balance -= value;
    await familyToUpdate.save();
    res.send({ successNum: 1 });
  } catch (error) {
    res.send({ errorNum: 1 });
  }
};
