import { model } from 'mongoose';
import ObligationSchema from '../schemas/obligation';

export const Obligation = model('Obligation', ObligationSchema);
