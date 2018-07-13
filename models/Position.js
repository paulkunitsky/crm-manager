import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const model = mongoose.model;
import {Collections} from '../constants';

export const PositionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  category: {
    ref: 'categories',
    type: Schema.Types.ObjectId
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  }
});

export const Position = model(Collections.POSITIONS, PositionSchema);