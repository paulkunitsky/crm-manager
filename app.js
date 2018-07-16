const express = require('express');
const mongoose = require('mongoose');
const {setupMongoose} = require('./setup/setup-mongoose');
const {setupMiddleware} = require('./setup/setup-global-middleware');
const {setupRoutes} = require('./setup/setup-routes');
const {Config} = require('./constants');
const Promise = require('bluebird');
const app = Promise.promisifyAll(express());

setupMongoose(mongoose);
setupMiddleware(app);
setupRoutes(app);

mongoose.connect(Config.MONGO_URI, { useNewUrlParser: true })
  .then(() => app.listenAsync(Config.PORT))
  .then(() => console.log(`app running on port ${Config.PORT}`))
  .catch(err => console.log(err));
