const { deletePosition } = require('../controllers/position-controller/delete-position');
const { patchPosition } = require('../controllers/position-controller/patch-position');
const { getCategory } = require('../controllers/category-controller/get-category');
const { postPosition } = require('../controllers/position-controller/post-position');

module.exports.getPositionRouter = function (express) {
  const router = express.Router();

  router.route('/')
    .post(postPosition);

  router.route('/:id')
    .patch(patchPosition)
    .delete(deletePosition);

  router.route(':category')
    .get(getCategory);

  return router;
};