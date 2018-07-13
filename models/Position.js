import {Schema, model} from 'mongoose';
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