import { ApiError, apiGet, buildUrl } from '../httpClient';

describe('buildUrl', () => {
  it('uneix la base i la ruta i ignora els paràmetres sense valor', () => {
    expect(buildUrl('/punts', { bbox: '1,2,3,4', limit: 20, cursor: undefined }, 'https://api.talaia.cat/api/v1')).toBe(
      'https://api.talaia.cat/api/v1/punts?bbox=1%2C2%2C3%2C4&limit=20',
    );
  });
});

describe('apiGet', () => {
  const originalFetch = globalThis.fetch;
  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  it('retorna el cos JSON si la resposta és correcta', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue(new Response(JSON.stringify({ data: [1] }), { status: 200 }));
    await expect(apiGet<{ data: number[] }>('/punts')).resolves.toEqual({ data: [1] });
  });

  it("converteix { error: { code, message } } en un ApiError", async () => {
    globalThis.fetch = jest
      .fn()
      .mockResolvedValue(
        new Response(JSON.stringify({ error: { code: 'not_found', message: 'No existeix' } }), { status: 404 }),
      );
    await expect(apiGet('/punts/x')).rejects.toEqual(new ApiError(404, 'not_found', 'No existeix'));
  });
});
