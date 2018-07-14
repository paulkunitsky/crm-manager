module.exports.setupMiddleware = function (app) {
  const bodyParser = require('body-parser');
  const cors = require('cors');
  const morgan = require('morgan');
  app.use(cors());
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
}