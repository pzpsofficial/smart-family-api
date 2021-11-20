import { Request, Response } from 'express';
import { Event } from '../../models/event';
import { Family } from '../../models/family';

export const eventMake = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, date, family, userId } = req.body;

    if (!name || !date || !userId || !family) {
      res.send({ errorNum: 2 });
      return;
    }

    const familyToAddEvent = await Family.findOne({ name: family });
    const newEvent = await new Event({ ...req.body, members: [userId] });
    familyToAddEvent.events.push(newEvent._id);
    await familyToAddEvent.save();
    res.send({
      successNum: 1,
      data: {
        newEvent,
      },
    });
  } catch (error) {
    res.send({ errorNum: 1 });
  }
};
