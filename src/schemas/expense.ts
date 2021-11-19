import { Schema } from 'mongoose';

const ExpenseSchema = new Schema({
  date: {
    type: Date,
    default: () => Date.now(),
  },

  madeBy: {
    type: String,
    required: true,
  },

  madeOn: {
    type: String,
    requried: false,
  },

  value: {
    type: Number,
    required: true,
  },
});

export default ExpenseSchema;
