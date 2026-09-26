import { initMonitoring, isMonitoringReady, reportError, reportMessage } from './sentry';

describe('monitoring (Phase A no-op)', () => {
  it('initMonitoring is idempotent and sets ready flag', () => {
    expect(isMonitoringReady()).toBe(false);
    initMonitoring();
    expect(isMonitoringReady()).toBe(true);
    initMonitoring();
    expect(isMonitoringReady()).toBe(true);
  });

  it('reportError never throws', () => {
    expect(() => reportError(new Error('test'))).not.toThrow();
    expect(() => reportError('string error', { path: '/x' })).not.toThrow();
    expect(() => reportError({ weird: true })).not.toThrow();
    expect(() => reportError(null)).not.toThrow();
  });

  it('reportMessage never throws', () => {
    expect(() => reportMessage('hello')).not.toThrow();
    expect(() => reportMessage('hello', { a: 1 })).not.toThrow();
  });
});
