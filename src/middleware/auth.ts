import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const auth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(' ')[1] || req.headers.authorization;

    if (!token) {
      res.send({ errorNum: 8 });
      return;
    }

    jwt.verify(token as string, process.env.JWT_SECRET_KEY as string, async (error: unknown, verified: unknown) => {
      if (error) {
        return res.send({ errorNum: 9 });
      } else {
        return next();
      }
    });
  } catch (error) {
    res.send({ errorNum: 1 });
  }
};

export default auth;
