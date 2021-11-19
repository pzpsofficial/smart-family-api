import { Schema } from 'mongoose';

const FridgeItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
    required: false,
    default: 1,
  },

  image: {
    type: String,
    required: false,
  },
});

export default FridgeItemSchema;
