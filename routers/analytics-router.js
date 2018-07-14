const { getOverview } = require('../controllers/analytics-controller/get-overview');
const { getAnalytics } = require('../controllers/analytics-controller/get-analytics');

module.exports.getAnalyticsRouter = function (express) {
  const router = express.Router();

  router.get('/overview', getOverview);
  router.get('/analytics', getAnalytics);

  return router;
};