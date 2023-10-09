import { WithChildren } from 'app/types/with-children';
import React from 'react';
import { createContext } from 'use-context-selector';
import { useAlarmedWall } from './hooks/use-alarmed-wall';

const useContextData = () => {
  const alarmedWall = useAlarmedWall();
  return {
    alarmedWall,
  };
};

type TContext = ReturnType<typeof useContextData>;

export const UiContext = createContext<TContext | undefined>(undefined);

export const UiProvider = ({ children }: WithChildren) => {
  const data = useContextData();

  return <UiContext.Provider value={data}>{children}</UiContext.Provider>;
};
