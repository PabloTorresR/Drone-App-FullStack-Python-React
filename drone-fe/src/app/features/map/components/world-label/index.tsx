import React, { memo } from 'react';
import styles from './styles.module.scss';

interface Props {
  width?: number;
  height?: number;
  depth?: number;
}

export const WorldLabel = memo(({ width, height, depth }: Props) => {
  if (!width || !height || !depth) {
    return;
  }
  return (
    <div className={styles.worldLabel}>
      <h3>World</h3>
      <div>
        x<strong>{width}</strong>
      </div>
      <div>
        y<strong>{height}</strong>
      </div>
      <div>
        z<strong>{depth}</strong>
      </div>
    </div>
  );
});
