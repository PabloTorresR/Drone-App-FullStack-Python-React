import { Directions } from '@app/features/controls/enums/directions';
import { useCallback, useState } from 'react';

export const useAlarmedWall = () => {
  const [wall, setWall] = useState<Directions.Arrow | Directions.Vertical | null>(null);

  const handleUpdateWall = useCallback(
    (position: Directions.Arrow | Directions.Vertical) => {
      setWall(position);
    },
    [setWall],
  );

  const clearWall = useCallback(() => {
    setWall(null);
  }, [setWall]);

  return { value: wall, actions: { update: handleUpdateWall, clear: clearWall } };
};
