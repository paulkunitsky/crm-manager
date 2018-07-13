import {Schema, model} from 'mongoose';
import {Collections} from '../constants';

export const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

export const User = model(Collections.USERS, UserSchema);