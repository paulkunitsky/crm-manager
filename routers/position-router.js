const {deletePosition} = require('../controllers/position-controller/delete-position');
const {patchPosition} = require('../controllers/position-controller/patch-position');
const {getCategory} = require('../controllers/category-controller/get-category');
const {postPosition} = require('../controllers/position-controller/post-position');
const {authRequiredMiddleware} = require('../middleware/auth-required-middleware');

module.exports.getPositionRouter = function (express) {
  const router = express.Router();

  router.route('/')
    .post(authRequiredMiddleware, postPosition);

  router.route('/:id')
    .patch(authRequiredMiddleware, patchPosition)
    .delete(authRequiredMiddleware, deletePosition);

  router.route(':category')
    .get(authRequiredMiddleware, getCategory);

  return router;
};