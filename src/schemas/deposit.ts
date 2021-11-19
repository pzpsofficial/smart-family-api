import { Schema } from 'mongoose';

const DepositSchema = new Schema({
  date: {
    type: Date,
    default: () => Date.now(),
  },

  madeBy: {
    type: String,
    required: true,
  },

  value: {
    type: Number,
    required: true,
  },
});

export default DepositSchema;
