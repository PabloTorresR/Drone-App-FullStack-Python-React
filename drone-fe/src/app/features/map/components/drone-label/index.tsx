import React, { memo } from 'react';
import styles from './styles.module.scss';

interface Props {
  width?: number;
  height?: number;
  depth?: number;
  landed?: boolean;
}

export const DroneLabel = memo(({ width, height, depth, landed }: Props) => {
  return (
    <div className={styles.droneLabel}>
      <h3>Drone Position</h3>
      <div>
        x<strong>{width}</strong>
      </div>
      <div>
        y<strong>{height}</strong>
      </div>
      <div>
        z<strong>{depth}</strong>
      </div>
      <h4>{landed && 'Landed'}</h4>
    </div>
  );
});
