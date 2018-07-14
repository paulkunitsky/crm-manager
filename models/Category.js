const mongoose = require('mongoose');
const {Collections} = require('../constants');
const {Types} = mongoose.Schema;

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    default: ''
  },
  user: {
    ref: Collections.USERS,
    type: Types.ObjectId
  }
});

const Category = mongoose.model(Collections.CATEGORIES, CategorySchema);