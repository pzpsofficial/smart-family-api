import { compare } from 'bcrypt';
import { Request, Response } from 'express';
import { User } from '../../models/user';
import jwt from 'jsonwebtoken';

export const UserLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.send({ errorNum: 2 });
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.send({ errorNum: 6 });
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      res.send({ errorNum: 7 });
    }

    const token = jwt.sign({ data: user }, process.env.JWT_SECRET_KEY as string, { expiresIn: '1d' });
    res.send(token);
  } catch (error) {
    res.send({ errorNum: 1 });
  }
};
