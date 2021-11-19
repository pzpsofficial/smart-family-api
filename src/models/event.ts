import { model } from 'mongoose';
import EventSchema from '../schemas/event';

export const Event = model('Event', EventSchema);
