import { Schema } from 'mongoose';

const FamilySchema = new Schema({
  name: {
    type: String,
    requried: true,
  },

  password: {
    type: String,
    required: true,
  },

  members: {
    type: [String],
    default: [],
  },

  balance: {
    type: Number,
    default: 0,
  },

  fridgeContents: {
    type: [String],
    default: [],
  },

  expenses: {
    type: [String],
    default: [],
  },

  deposits: {
    type: [String],
    default: [],
  },

  events: {
    type: [String],
    default: [],
  },

  shoppingList: {
    type: [String],
    default: [],
  },

  obligations: {
    type: [String],
    default: [],
  },
});

export default FamilySchema;
