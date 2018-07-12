import {patchCategory} from '../controllers/category-controller/patch-category';
import {deleteCategory} from '../controllers/category-controller/delete-category';
import {getCategory} from '../controllers/category-controller/get-category';
import {postCategory} from '../controllers/category-controller/post-category';
import {getCategories} from '../controllers/category-controller/get-categories';

export function getCategoryRouter(express) {
  const router = express.Router();

  router.route('/')
    .get(getCategories)
    .post(postCategory);

  router.route('/:id')
    .get(getCategory)
    .delete(deleteCategory)
    .patch(patchCategory);

  return router;
}