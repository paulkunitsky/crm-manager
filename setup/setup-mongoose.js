module.exports.setupMongoose = function (mongoose) {
  const Promise = require('bluebird');
  require('../models/Category');
  require('../models/Order');
  require('../models/Position');
  require('../models/User');
  mongoose.Promise = Promise;
};