import { useContextSelector } from 'use-context-selector';
import { UiContext } from '..';

export const useAlarmedWallSelector = () => useContextSelector(UiContext, state => state?.alarmedWall);
