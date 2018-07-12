import {postLogin} from '../controllers/auth-controller/post-login';
import {postRegister} from '../controllers/auth-controller/post-register';

export function getAuthRouter(express) {
  const router = express.Router();

  router.post('/login', postLogin);
  router.post('/register', postRegister);

  return router;
}