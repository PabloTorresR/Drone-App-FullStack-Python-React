import { useCallback } from 'react';
import { getDirectionFromMovement, mapArrayToPositionObjects } from '../utils';
import { Messages } from '../enums/messages';
import { useAlarmedWallSelector } from '@app/context/ui/selectors';
import {
  useLandedSelector,
  usePositionSelector,
  useWorldBoundsSelector,
} from '@app/features/controls/context/selectors';

export const useWebSocketActions = (socket?: WebSocket) => {
  const alarmedWall = useAlarmedWallSelector();
  const landed = useLandedSelector();
  const position = usePositionSelector();
  const worldBounds = useWorldBoundsSelector();

  const sendMessage = useCallback(
    message => {
      if (socket?.readyState === WebSocket.OPEN) {
        const data = JSON.stringify(message);
        socket?.send(data);
      }
    },
    [socket],
  );

  const handleData = useCallback(data => {
    const parsedData = JSON.parse(data);
    if (parsedData.message === Messages.TAKEOFF) {
      position?.handleUpdatePosition?.(mapArrayToPositionObjects(parsedData.payload?.initial_position));
      worldBounds?.handleUpdatePosition?.(mapArrayToPositionObjects(parsedData.payload?.world_bounds));
    } else if (parsedData.message === Messages.MOVEMENT) {
      alarmedWall?.actions.clear();
      position?.handleUpdatePosition?.(mapArrayToPositionObjects(parsedData.payload?.new_position));
    } else if (parsedData.message === Messages.CRASH_IMMINATE) {
      alarmedWall?.actions.update(getDirectionFromMovement(parsedData.payload?.movement));
    } else if (parsedData.message === Messages.LANDING) {
      alarmedWall?.actions.clear();
      landed?.toggle();
    }
    //
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { sendMessage, handleData };
};
