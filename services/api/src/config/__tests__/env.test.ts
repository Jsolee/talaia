import { loadEnv } from '../env';

describe('loadEnv', () => {
  it('fa servir el port 3000 per defecte', () => {
    expect(loadEnv({}).API_PORT).toBe(3000);
  });

  it('converteix API_PORT a número', () => {
    expect(loadEnv({ API_PORT: '8080' }).API_PORT).toBe(8080);
  });

  it('no arrenca amb un port invàlid', () => {
    expect(() => loadEnv({ API_PORT: 'abc' })).toThrow('API_PORT');
  });
});
