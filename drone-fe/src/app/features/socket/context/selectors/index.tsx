import { useContextSelector } from 'use-context-selector';
import { SocketContext } from '../socket-context';

export const useSocketSelector = () => useContextSelector(SocketContext, state => state?.socket);
export const useSocketActionsSelector = () => useContextSelector(SocketContext, state => state?.socket.actions);
