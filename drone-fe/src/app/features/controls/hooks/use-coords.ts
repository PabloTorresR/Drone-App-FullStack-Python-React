import { useCallback, useState } from 'react';

export const useCoords = <T extends object>() => {
  const [position, setPosition] = useState<T>();

  const handleUpdatePosition = useCallback(
    (position: T) => {
      setPosition(position);
    },
    [setPosition],
  );
  return { value: position, handleUpdatePosition };
};
