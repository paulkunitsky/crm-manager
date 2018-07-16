const {fileUploadMiddleware} = require('../middleware/file-upload-middleware');
const {authRequiredMiddleware} = require('../middleware/auth-required-middleware');
const {patchCategory} = require('../controllers/category-controller/patch-category');
const {deleteCategory} = require('../controllers/category-controller/delete-category');
const {getCategory} = require('../controllers/category-controller/get-category');
const {postCategory} = require('../controllers/category-controller/post-category');
const {getCategories} = require('../controllers/category-controller/get-categories');

module.exports.getCategoryRouter = function (express) {
  const router = express.Router();

  router.route('/')
    .get(authRequiredMiddleware, getCategories)
    .post(authRequiredMiddleware, fileUploadMiddleware.single('image'), postCategory);

  router.route('/:id')
    .get(authRequiredMiddleware, getCategory)
    .delete(authRequiredMiddleware, deleteCategory)
    .patch(authRequiredMiddleware, fileUploadMiddleware.single('image'), patchCategory);

  return router;
};