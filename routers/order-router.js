const { postOrder } = require('../controllers/order-controller/post-order');
const { getOrder } = require('../controllers/order-controller/get-order');

module.exports.getOrderRouter = function (express) {
  const router = express.Router();

  router.route('/')
    .get(getOrder)
    .post(postOrder);

  return router;
};