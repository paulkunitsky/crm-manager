const mongoose = require('mongoose');
const {Collections} = require('../constants');
const {Types} = mongoose.Schema;

const OrderSchema = mongoose.Schema({
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
  userId: {
    ref: Collections.USERS,
    type: Types.ObjectId
  }
});

const Order = mongoose.model(Collections.ORDERS, OrderSchema);