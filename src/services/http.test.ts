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
});
