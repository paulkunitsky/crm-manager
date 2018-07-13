import {Schema, model} from 'mongoose';
import {Collections} from '../constants';

export const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  imageSrc: {
    type: string,
    default: ''
  },
  user: {
    ref: Collections.USERS,
    type: ObjectId
  }
});

export const Category = model(Collections.CATEGORIES, CategorySchema);