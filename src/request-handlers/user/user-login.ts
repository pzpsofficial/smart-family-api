import { compare } from 'bcrypt';
import { Request, Response } from 'express';
import { User } from '../../models/user';
import jwt from 'jsonwebtoken';

export const UserLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

  console.log(req.body);    4


    if (!email || !password) {
      res.send({ errorNum: 2 });
      return;
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.send({ errorNum: 6 });
      return;
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      res.send({ errorNum: 7 });
      return;
    }

    const token = jwt.sign({ data: user }, process.env.JWT_SECRET_KEY as string, { expiresIn: '1d' });
                                                                                                                                                        
    res.send({
      successNum: 1,
      data: {
        token,
        fullName: user.fullName,
        email: user.fullName,
        role: user.role,
        birthday: user.birthday,
      },
    });
  } catch (error) {
    res.send({ errorNum: 1 });
  }
};
