import { compare } from 'bcrypt';
import { Request, Response } from 'express';
import { Family } from '../../models/family';

export const familyJoin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { password, familyName, userId } = req.body;

    if (!password || !familyName || !userId) {
      res.send({ errorNum: 1 });
      return;
    }

    const familyToJoin = await Family.findOne({ name: familyName });

    if (!familyToJoin) {
      res.send({ errorNum: 6 });
      return;
    }

    if (!compare(password, familyToJoin.password)) {
      res.send({ errorNum: 10 });
      return;
    }

    if (familyToJoin.members.includes(userId)) {
      res.send({ errorNum: 11 });
      return;
    }

    await Family.updateOne({ name: familyToJoin.name }, { $push: { members: userId } });
    res.send({
      successNum: 1,
      data: {
        familyToJoin,
      },
    });
  } catch (error) {
    res.send({ errorNum: 1 });
  }
};
