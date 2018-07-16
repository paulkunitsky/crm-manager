const {postOrder} = require('../controllers/order-controller/post-order');
const {getOrder} = require('../controllers/order-controller/get-order');
const {authRequiredMiddleware} = require('../middleware/auth-required-middleware');

module.exports.getOrderRouter = function (express) {
  const router = express.Router();

  router.route('/')
    .get(authRequiredMiddleware, getOrder)
    .post(authRequiredMiddleware, postOrder);

  return router;
};