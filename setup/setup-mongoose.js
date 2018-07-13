import Promise from 'bluebird';
import mongoose from 'mongoose';
import '../models/Category';
import '../models/Order';
import '../models/Position';
import '../models/User';

export function setupMongoose() {
  mongoose.Promise = Promise;
}