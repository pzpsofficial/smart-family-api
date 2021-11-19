import { Request, Response } from 'express';
import { User } from '../../models/user';
import isStrongPassword from 'validator/lib/isStrongPassword';
import { hash } from 'bcrypt';

export const userRegister = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, email, role, birthday, password, confirmPassword } = req.body;

    if (!firstName || !lastName || !email || !role || !birthday || !password || !confirmPassword) {
      res.send({ errorNum: 2 });
    }

    if (password !== confirmPassword) {
      res.send({ errorNum: 3 });
    }

    const userWithSameEmail = await User.findOne({ email });

    if (userWithSameEmail) {
      res.send({ errorNum: 4 });
    }

    if (!isStrongPassword(password)) {
      res.send({ errorNum: 5 });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await new User({ ...req.body, password: hashedPassword }).save();

    if (!newUser) {
      res.send({ errorNum: 6 });
    }

    res.send({ successNum: 1 });
  } catch (error) {
    res.send({ errorNum: 1 });
  }
};
