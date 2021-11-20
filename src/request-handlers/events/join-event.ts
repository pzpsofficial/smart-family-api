import { Request, Response } from 'express';
import { Event } from '../../models/event';

export const joinEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, eventId } = req.body;

    if (!userId || !eventId) {
      res.send({ errorNum: 2 });
      return;
    }

    const event = await Event.findById(eventId);

    if (!event) {
      res.send({ errorNum: 6 });
      return;
    }

    if (event.members.includes(userId)) {
      res.send({ errorNum: 13 });
      return;
    }

    await Event.updateOne({ _id: eventId }, { $push: { members: userId } });
    const updatedEvent = await Event.findById(eventId);
    res.send({
      successNum: 1,
      data: {
        updatedEvent,
      },
    });
  } catch (error) {
    res.send({ errorNum: 1 });
  }
};
