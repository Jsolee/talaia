import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { z } from 'zod';

const EnvSchema = z.object({
  API_PORT: z.coerce.number().int().min(1).max(65535).default(3000),
});

export type Env = z.infer<typeof EnvSchema>;

/** Valida les variables d'entorn a l'arrencada: si en falta o n'hi ha una de malament, no arrenca. */
export function loadEnv(source: NodeJS.ProcessEnv = process.env): Env {
  const result = EnvSchema.safeParse(source);
  if (!result.success) {
    throw new Error(`Variables d'entorn invàlides:\n${z.prettifyError(result.error)}`);
  }
  return result.data;
}

// src/config i dist/config són a dos nivells del package.json de l'API.
export const version = (
  JSON.parse(readFileSync(join(__dirname, '../../package.json'), 'utf8')) as { version: string }
).version;
