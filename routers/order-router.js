import {postOrder} from '../controllers/order-controller/post-order';
import {getOrder} from '../controllers/order-controller/get-order';

export function getOrderRouter(express) {
  const router = express.Router();

  router.path('/')
    .get(getOrder)
    .post(postOrder);

  return router;
}