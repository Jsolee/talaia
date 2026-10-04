import { env } from '@/core/config/env';

/** Error de l'API de Talaia: el servidor sempre respon `{ error: { code, message } }`. */
export class ApiError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

type Query = Record<string, string | number | boolean | undefined>;

export function buildUrl(path: string, query?: Query, baseUrl: string = env.apiUrl): string {
  const url = new URL(path.replace(/^\//, ''), baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`);
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value !== undefined) url.searchParams.set(key, String(value));
  }
  return url.toString();
}

/**
 * Únic punt d'accés HTTP de l'app. Només el fan servir els Repository (MVVM):
 * les pantalles i els ViewModels no criden mai `fetch` directament.
 */
export async function apiGet<T>(path: string, query?: Query, init?: RequestInit): Promise<T> {
  const response = await fetch(buildUrl(path, query), {
    ...init,
    headers: { Accept: 'application/json', ...init?.headers },
  });
  if (!response.ok) throw await toApiError(response);
  return (await response.json()) as T;
}

async function toApiError(response: Response): Promise<ApiError> {
  try {
    const body = (await response.json()) as { error?: { code?: string; message?: string } };
    return new ApiError(
      response.status,
      body.error?.code ?? 'unknown',
      body.error?.message ?? response.statusText,
    );
  } catch {
    return new ApiError(response.status, 'unknown', response.statusText);
  }
}
