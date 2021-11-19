import { Schema } from 'mongoose';

const ShoppingItemListSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    required: false,
  },

  preferableMaker: {
    type: String,
    required: true,
  },

  maximumPrice: {
    type: String,
    required: true,
  },
});

export default ShoppingItemListSchema;
