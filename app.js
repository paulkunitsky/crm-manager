import express from 'express';
import {setupRoutes} from './routes';
import {Config} from './constants';

const app = express();

setupRoutes(app);

app.listen(Config.PORT, () => console.log(`app running on port ${constants.PORT}`));