import { WithChildren } from 'app/types/with-children';
import React from 'react';
import { createContext } from 'use-context-selector';
import { LOCAL_SERVER } from '@app/constants/server';
import useWebSocket from '@app/features/socket/hooks/use-socket';

const useContextData = () => {
  const socket = useWebSocket(LOCAL_SERVER);

  return {
    socket,
  };
};

type TContext = ReturnType<typeof useContextData>;

export const SocketContext = createContext<TContext | undefined>(undefined);

export const SocketProvider = ({ children }: WithChildren) => {
  const data = useContextData();

  return <SocketContext.Provider value={data}>{children}</SocketContext.Provider>;
};
