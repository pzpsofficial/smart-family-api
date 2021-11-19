import { hash } from 'bcrypt';
import { Request, Response } from 'express';
import { Family } from '../../models/family';

export const familyCreate = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, creatorId, password } = req.body;
    if (!name || !creatorId || !password) {
      res.send({ errorNum: 2 });
      return;
    }

    const hashedPassword = await hash(password, 10);

    const newFamily = await new Family({ ...req.body, password: hashedPassword }).save();

    if (!newFamily) {
      res.send({ errorNum: 6 });
    }

    await Family.updateOne({ _id: newFamily._id }, { $push: { members: creatorId } });

    res.send({ succesNum: 1 });
  } catch (error) {
    console.log(error);
    res.send({ errorNum: 1 });
  }
};
