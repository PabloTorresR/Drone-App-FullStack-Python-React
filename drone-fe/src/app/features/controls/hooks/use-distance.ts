import { useCallback, useMemo, useState } from 'react';
import { World } from '../enums/position';

export const useDistance = (worldBounds?: World) => {
  const [distance, setDistance] = useState<number>(0);

  const maxDistance = useMemo(() => {
    return Object.values(worldBounds ?? [0]).reduce((acc, cur) => Math.max(acc, cur));
  }, [worldBounds]);

  const handleIntensityChange = useCallback(
    (value: number) => {
      setDistance(value);
    },
    [setDistance],
  );
  return { value: distance, handleIntensityChange, maxDistance };
};
