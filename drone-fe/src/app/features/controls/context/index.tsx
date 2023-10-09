import { WithChildren } from 'app/types/with-children';
import React from 'react';
import { createContext } from 'use-context-selector';
import { useDistance } from '../hooks/use-distance';
import { useCoords } from '../hooks/use-coords';
import { Position, World } from '../enums/position';
import { useToggle } from 'react-use';

const useContextData = () => {
  const dronePosition = useCoords<Position>();
  const worldBounds = useCoords<World>();
  const distance = useDistance(worldBounds.value);
  const [landed, toggleLanded] = useToggle(false);
  return {
    distance,
    worldBounds,
    dronePosition,
    landed: {
      value: landed,
      toggle: toggleLanded,
    },
  };
};

type TContext = ReturnType<typeof useContextData>;

export const ControlsContext = createContext<TContext | undefined>(undefined);

export const ControlsProvider = ({ children }: WithChildren) => {
  const data = useContextData();

  return <ControlsContext.Provider value={data}>{children}</ControlsContext.Provider>;
};
