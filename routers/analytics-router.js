import {getOverview} from '../controllers/analytics-controller/get-overview';
import {getAnalytics} from '../controllers/analytics-controller/get-analytics';

export function getAnalyticsRouter(express) {
  const router = express.Router();

  router.get('/overview', getOverview);
  router.get('/analytics', getAnalytics);

  return router;
}