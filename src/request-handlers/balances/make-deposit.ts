import { Request, Response } from 'express';
import { Deposit } from '../../models/deposit';
import { Family } from '../../models/family';

export const makeDeposit = async (req: Request, res: Response): Promise<void> => {
  try {
    const { madeBy, value, family } = req.body;

    if (!madeBy || !value || !family) {
      res.send({ errorNum: 2 });
      return;
    }

    const familyToUpdate = await Family.findOne({ name: family });

    if (!familyToUpdate) {
      res.send({ errorNum: 6 });
    }

    const newDeposit = await new Deposit({ ...req.body }).save();
    await Family.updateOne({ name: family }, { $push: { deposits: newDeposit._id }, $inc: { balance: value } });
    const familyToSend = await Family.findOne({ name: family });

    res.send({
      successNum: 1,
      data: {
        newBalance: familyToSend.balance,
      },
    });
  } catch (error) {
    res.send({ errorNum: 1 });
  }
};
