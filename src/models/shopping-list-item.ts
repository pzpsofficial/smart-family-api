import { model } from 'mongoose';
import ShoppingListItemSchema from '../schemas/shoppiing-list-item';

export const ShoopingItemList = model('ShoppingListItem', ShoppingListItemSchema);
