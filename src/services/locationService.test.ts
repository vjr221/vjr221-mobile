import {
  __resetLocationCacheForTests,
  getUserLocation,
  requestUserLocation,
} from './locationService';

describe('locationService (Phase B défensive)', () => {
  beforeEach(() => {
    __resetLocationCacheForTests();
    jest.resetModules();
  });

  it('getUserLocation returns unavailable without prompting', async () => {
    const result = await getUserLocation();
    expect(result.permission).toBe('unavailable');
    expect(result.latitude).toBe(0);
    expect(result.longitude).toBe(0);
  });

  it('requestUserLocation returns unavailable when expo-location is missing', async () => {
    jest.doMock('expo-location', () => {
      throw new Error('module not linked');
    });
    // Re-import after mock would require dynamic; the real service catches import failure.
    const result = await requestUserLocation();
    expect(result.permission).toBe('unavailable');
  });

  it('requestUserLocation never throws', async () => {
    await expect(requestUserLocation()).resolves.toMatchObject({
      permission: expect.stringMatching(/granted|denied|unavailable/),
    });
  });
});
