import express from 'express';
import {setupRoutes} from './setup/setup-routes';
import {setupMiddleware} from './setup/setup-middleware';
import {Config} from './constants';

const app = express();

setupRoutes(app);
setupMiddleware(app);

app.listen(Config.PORT, () => console.log(`app running on port ${Config.PORT}`));