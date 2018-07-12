import {deletePosition} from '../controllers/position-controller/delete-position';
import {patchPosition} from '../controllers/position-controller/patch-position';
import {getCategory} from '../controllers/category-controller/get-category';
import {postPosition} from '../controllers/position-controller/post-position';

export function getPositionRouter(express) {
  const router = express.Router();

  router.route('/')
    .post(postPosition);

  router.route('/:id')
    .patch(patchPosition)
    .delete(deletePosition);

  router.route(':category')
    .get(getCategory);

  return router;
}