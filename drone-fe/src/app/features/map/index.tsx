import React, { memo } from 'react';
import { WorldBounds } from './components/world-bounds';

import styles from './styles.module.scss';
import { WorldLabel } from './components/world-label';
import { DroneLabel } from './components/drone-label';
import { useLandedSelector, usePositionSelector, useWorldBoundsSelector } from '../controls/context/selectors';
import { useAlarmedWallSelector } from '@app/context/ui/selectors';

export const WorldMap = memo(() => {
  const dronePosition = usePositionSelector();
  const worldBounds = useWorldBoundsSelector();
  const alarmedWall = useAlarmedWallSelector();
  const landed = useLandedSelector();

  return (
    <div className={styles.worldContainer}>
      <WorldLabel
        height={worldBounds?.value?.x}
        width={worldBounds?.value?.y}
        depth={worldBounds?.value?.z}
      ></WorldLabel>
      <WorldBounds height={worldBounds?.value?.x} width={worldBounds?.value?.y} highlightedWall={alarmedWall?.value} />
      <DroneLabel
        height={dronePosition?.value?.x}
        width={dronePosition?.value?.y}
        depth={dronePosition?.value?.z}
        landed={landed?.value}
      />
    </div>
  );
});
