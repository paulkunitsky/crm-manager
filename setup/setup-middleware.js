import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

export function setupMiddleware(app) {
  app.use(cors());
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
}