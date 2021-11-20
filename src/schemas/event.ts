import { Schema } from 'mongoose';

const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  members: {
    type: [String],
    default: [],
  },

  expireAt: {
    type: Date,
  },
});

EventSchema.pre('save', function (next) {
  this.expiresAt = this.date;
  next();
});

export default EventSchema;
