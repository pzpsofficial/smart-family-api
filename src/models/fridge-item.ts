import { model } from 'mongoose';
import FridgeItemSchema from '../schemas/fridge-item';

export const FridgeItem = model('FridgeItem', FridgeItemSchema);
