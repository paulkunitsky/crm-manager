const { patchCategory } = require('../controllers/category-controller/patch-category');
const { deleteCategory } = require('../controllers/category-controller/delete-category');
const { getCategory } = require('../controllers/category-controller/get-category');
const { postCategory } = require('../controllers/category-controller/post-category');
const { getCategories } = require('../controllers/category-controller/get-categories');

module.exports.getCategoryRouter = function (express) {
  const router = express.Router();

  router.route('/')
    .get(getCategories)
    .post(postCategory);

  router.route('/:id')
    .get(getCategory)
    .delete(deleteCategory)
    .patch(patchCategory);

  return router;
};