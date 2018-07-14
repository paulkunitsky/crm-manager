const { postLogin } = require('../controllers/auth-controller/post-login');
const { postRegister } = require('../controllers/auth-controller/post-register');

module.exports.getAuthRouter = function (express) {
  const router = express.Router();

  router.post('/login', postLogin);
  router.post('/register', postRegister);

  return router;
};