module.exports.setupMiddleware = function (app) {
  const bodyParser = require('body-parser');
  const cors = require('cors');
  const morgan = require('morgan');
  const passport = require('./setup-middleware-passport');

  app.use(passport.initialize());
  app.use(cors());
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
}