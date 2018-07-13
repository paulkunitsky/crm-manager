import {Schema, model} from 'mongoose';
import {Collections} from '../constants';

export const OrderSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  order: {
    type: Number,
    required: true
  },
  list: [
    {
      name: String,
      quantity: Number,
      cost: Number
    }
  ],
  user: {
    ref: Collections.USERS,
    type: Schema.Types.ObjectId
  }
});

export const Order = model(Collections.ORDERS, OrderSchema);