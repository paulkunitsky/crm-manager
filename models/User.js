import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const model = mongoose.model;
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