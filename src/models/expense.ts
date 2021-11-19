import { model } from 'mongoose';
import ExpenseSchema from '../schemas/expense';

export const Expense = model('Expense', ExpenseSchema);
