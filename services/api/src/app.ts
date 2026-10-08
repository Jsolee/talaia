import express from 'express';

import { errorHandler, notFound } from './middleware/errors';
import { createApiRouter } from './routes';

/** L'app sense servidor: els tests la fan servir amb supertest sense obrir cap port. */
export function createApp() {
  const app = express();
  app.disable('x-powered-by');
  app.use(express.json());
  app.use('/api/v1', createApiRouter());
  app.use(notFound);
  app.use(errorHandler);
  return app;
}
