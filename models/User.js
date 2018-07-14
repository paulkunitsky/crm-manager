const mongoose = require('mongoose');
const {Collections} = require('../constants');
const {Types} = mongoose.Schema;

const UserSchema = mongoose.Schema({
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

const User = mongoose.model(Collections.USERS, UserSchema);