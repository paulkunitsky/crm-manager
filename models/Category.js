import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const model = mongoose.model;
import {Collections} from '../constants';

export const CategorySchema = new Schema({
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
    type: Schema.Types.ObjectId
  }
});

export const Category = model(Collections.CATEGORIES, CategorySchema);