import { useEffect, useRef } from 'react';
import { useWebSocketActions } from './use-socket-message-handler';

const useWebSocket = (socketUrl: string) => {
  const socketRef = useRef<WebSocket>();
  const socketActions = useWebSocketActions(socketRef?.current);

  useEffect(() => {
    socketRef.current = new WebSocket(socketUrl);
    socketRef.current.onmessage = event => {
      socketActions.handleData(event.data);
    };
    return () => {
      socketRef.current?.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socketUrl]);

  return { socket: socketRef.current, actions: socketActions };
};

export default useWebSocket;
