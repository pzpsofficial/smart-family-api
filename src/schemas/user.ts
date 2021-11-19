import { Schema } from 'mongoose';

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    requried: true,
  },

  role: {
    type: String,
    required: true,
    enum: ['parent', 'child', 'uncle', 'aunt', 'grandphater', 'grandmother', 'cousin'],
  },

  email: {
    type: String,
    required: true,
  },

  birthday: {
    type: Date,
    required: false,
  },

  password: {
    type: String,
    required: true,
  },
});

UserSchema.virtual('fullName').get(function (this: any): string {
  return `${this.firstName} ${this.lastName}`;
});

export default UserSchema;
