import { Router } from 'express';
import { z } from 'zod';

import { version } from '../config/env';
import { registry } from '../openapi';

const HealthSchema = z
  .object({ status: z.literal('ok'), version: z.string() })
  .meta({ id: 'Health' });

registry.registerPath({
  method: 'get',
  path: '/health',
  tags: ['Sistema'],
  summary: "Estat de l'API",
  responses: {
    200: {
      description: "L'API funciona",
      content: { 'application/json': { schema: HealthSchema } },
    },
  },
});

export const healthRouter = Router();

healthRouter.get('/', (_req, res) => {
  res.json({ status: 'ok', version } satisfies z.infer<typeof HealthSchema>);
});
