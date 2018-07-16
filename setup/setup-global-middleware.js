module.exports.setupMiddleware = function (app) {
  const path = require('path');
  const express = require('express');
  const bodyParser = require('body-parser');
  const cors = require('cors');
  const morgan = require('morgan');
  const {passportMiddleware} = require('../middleware/passport-middleware');

  app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
  app.use(passportMiddleware.initialize());
  app.use(cors());
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
}