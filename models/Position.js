const mongoose = require('mongoose');
const {Collections} = require('../constants');
const {Types} = mongoose.Schema;

const PositionSchema = mongoose.Schema({
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
    type: Types.ObjectId
  },
  user: {
    ref: 'users',
    type: Types.ObjectId
  }
});

const Position = mongoose.model(Collections.POSITIONS, PositionSchema);