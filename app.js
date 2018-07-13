import express from 'express';
import mongoose from 'mongoose';
import {setupMongoose} from './setup/setup-mongoose';
import {setupMiddleware} from './setup/setup-middleware';
import {setupRoutes} from './setup/setup-routes';
import {Config} from './constants';
import Promise from 'bluebird';

const app = Promise.promisifyAll(express());

console.log('#######################')

setupMongoose();
setupMiddleware(app);
setupRoutes(app);

mongoose
  .connect(Config.MONGO_URI, { useNewUrlParser: true })
  .then(() => app.listenAsync(Config.PORT))
  .then(() => console.log(`app running on port ${Config.PORT}`))
  .catch(err => console.log(err));