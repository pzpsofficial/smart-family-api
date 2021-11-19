import DepositSchema from '../schemas/deposit';
import { model } from 'mongoose';

export const Deposit = model('Deposit', DepositSchema);
