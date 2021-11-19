import { model } from 'mongoose';
import FamilySchema from '../schemas/family';

export const Family = model('Family', FamilySchema);
