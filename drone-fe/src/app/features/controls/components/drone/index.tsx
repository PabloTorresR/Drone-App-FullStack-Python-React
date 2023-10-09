import React, { memo, useMemo } from 'react';
import droneImage from '@app/assets/drone.png';

import styles from './styles.module.scss';
import {
  DRONE_SIZE,
  DRONE_SIZE_LANDED,
  MAX_API_HEIGHT,
  MAX_API_WIDTH,
  MAX_WORLD_HEIGHT,
  MAX_WORLD_WIDTH,
} from '@app/features/map/constants';

interface Props {
  width?: number;
  height?: number;
  landed?: boolean;
}

export const Drone = memo(({ width, height, landed }: Props) => {
  const droneStyle = useMemo(() => {
    return {
      bottom: ((height ?? 0) * MAX_WORLD_HEIGHT) / MAX_API_HEIGHT - DRONE_SIZE / 2,
      left: ((width ?? 0) * MAX_WORLD_WIDTH) / MAX_API_WIDTH - DRONE_SIZE / 2,
      color: '#f49',
    };
  }, [height, width]);
  if (width === undefined || height === undefined) {
    //NOTE: using the "!" operator would make the drone invisible in position x=0 or y=0
    return;
  }
  return (
    <img
      src={droneImage}
      className={styles.drone}
      height={landed ? DRONE_SIZE_LANDED : DRONE_SIZE}
      width={landed ? DRONE_SIZE_LANDED : DRONE_SIZE}
      style={droneStyle}
    />
  );
});
