const {fileUpload} = require('../middleware/file-upload');
const {authRequiredPolicy} = require('../policies/auth-required-policy');
const {patchCategory} = require('../controllers/category-controller/patch-category');
const {deleteCategory} = require('../controllers/category-controller/delete-category');
const {getCategory} = require('../controllers/category-controller/get-category');
const {postCategory} = require('../controllers/category-controller/post-category');
const {getCategories} = require('../controllers/category-controller/get-categories');

module.exports.getCategoryRouter = function (express) {
  const router = express.Router();

  router.route('/')
    .get(authRequiredPolicy, getCategories)
    .post(authRequiredPolicy, fileUpload.single('image'), postCategory);

  router.route('/:id')
    .get(authRequiredPolicy, getCategory)
    .delete(authRequiredPolicy, deleteCategory)
    .patch(authRequiredPolicy, fileUpload.single('image'), patchCategory);

  return router;
};