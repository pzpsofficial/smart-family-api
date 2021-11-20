import { Request, Response, Router } from 'express';
import auth from '../middleware/auth';
import { eventMake } from '../request-handlers/events/event-make';
import { joinEvent } from '../request-handlers/events/join-event';

const EventsRouter = Router();

EventsRouter.post('/add', auth, (req: Request, res: Response) => eventMake(req, res));
EventsRouter.post('/join', auth, (req: Request, res: Response) => joinEvent(req, res));

export default EventsRouter;
