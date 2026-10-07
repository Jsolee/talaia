import { createApp } from './app';
import { loadEnv } from './config/env';

const env = loadEnv();

createApp().listen(env.API_PORT, (error) => {
  if (error) throw error;
  console.log(`Talaia API a http://localhost:${env.API_PORT}/api/v1 (docs: /api/v1/docs)`);
});
