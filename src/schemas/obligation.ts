import { Schema } from 'mongoose';

const ObligationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  taskOwner: {
    type: String,
    required: true,
  },

  makeUntil: {
    type: Date,
    required: true,
  },
});

export default ObligationSchema;
