import { Request, Response } from 'express';
import { Event } from '../../models/event';
import { User } from '../../models/user';

export const getEventMembers = async (req: Request, res: Response): Promise<void> => {
  try {
    const { eventId } = req.params;

    const event = await Event.findById(eventId);

    if (!event) {
      res.send({ errorNum: 6 });
      return;
    }

    const members = [];

    for (let i = 0; i < event.members.length; i++) {
      const member = await User.findOne({ _id: event.members[i] });
      members.push(member);
    }

    res.send({
      successNum: 1,
      data: {
        members,
      },
    });
  } catch (error) {
    res.send({ errorNum: 1 });
  }
};
