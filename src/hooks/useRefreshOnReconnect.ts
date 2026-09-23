import { useEffect, useRef } from 'react';
import { useOnlineStatus } from './useOnlineStatus';

export function useRefreshOnReconnect(onReconnect: () => void) {
  const online = useOnlineStatus();
  const previous = useRef(online);

  useEffect(() => {
    if (!previous.current && online) onReconnect();
    previous.current = online;
  }, [online, onReconnect]);

  return online;
}
