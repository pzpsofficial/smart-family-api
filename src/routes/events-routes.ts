import { Request, Response, Router } from 'express';
import { eventMake } from '../request-handlers/events/event-make';

const EventsRouter = Router();

EventsRouter.post('/add', (req: Request, res: Response) => eventMake(req, res));

export default EventsRouter;
