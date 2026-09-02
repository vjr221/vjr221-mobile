import { getJson, HttpError } from './http';

const jsonResponse = (body: unknown, ok = true, status = 200) => ({
  ok,
  status,
  json: () => Promise.resolve(body),
});

describe('getJson', () => {
  const originalFetch = globalThis.fetch;
  afterEach(() => {
    globalThis.fetch = originalFetch;
    jest.restoreAllMocks();
  });

  it('renvoie directement la réponse en cas de succès', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue(jsonResponse({ ok: true }));
    const result = await getJson('/test');
    expect(result).toEqual({ ok: true });
    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
    expect(globalThis.fetch).toHaveBeenCalledWith(
      'https://vjr221.sn/wp-json/wp/v2/test',
      expect.objectContaining({ headers: { Accept: 'application/json' } }),
    );
  });

  it('normalise les slashs entre la base API et le chemin', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue(jsonResponse({ ok: true }));
    await getJson('//test', undefined, 'https://api.example.test///');
    expect(globalThis.fetch).toHaveBeenCalledWith(
      'https://api.example.test/test',
      expect.any(Object),
    );
  });

  it('retente une fois après une erreur réseau puis réussit', async () => {
    globalThis.fetch = jest.fn()
      .mockRejectedValueOnce(new TypeError('Network request failed'))
      .mockResolvedValueOnce(jsonResponse({ recovered: true }));
    const result = await getJson('/test');
    expect(result).toEqual({ recovered: true });
    expect(globalThis.fetch).toHaveBeenCalledTimes(2);
  });

  it('retente une fois sur une erreur 500 puis abandonne si ça échoue encore', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue(jsonResponse({}, false, 503));
    await expect(getJson('/test')).rejects.toBeInstanceOf(HttpError);
    expect(globalThis.fetch).toHaveBeenCalledTimes(2);
  });

  it('ne retente jamais sur une erreur 404', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue(jsonResponse({}, false, 404));
    await expect(getJson('/test')).rejects.toBeInstanceOf(HttpError);
    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
  });

  it('propage immédiatement un AbortSignal déjà interrompu', async () => {
    const controller = new AbortController();
    controller.abort();
    globalThis.fetch = jest.fn();
    await expect(getJson('/test', controller.signal)).rejects.toMatchObject({ name: 'AbortError' });
    expect(globalThis.fetch).not.toHaveBeenCalled();
  });
});
