import { useContextSelector } from 'use-context-selector';
import { ControlsContext } from '..';

export const useDistanceSelector = () => useContextSelector(ControlsContext, state => state?.distance);
export const usePositionSelector = () => useContextSelector(ControlsContext, state => state?.dronePosition);
export const useWorldBoundsSelector = () => useContextSelector(ControlsContext, state => state?.worldBounds);
export const useLandedSelector = () => useContextSelector(ControlsContext, state => state?.landed);
