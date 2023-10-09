import React, { memo } from 'react';

import styles from '../../styles.module.scss';
import { WorldMap } from '@app/features/map';

export const MapContainer = memo(() => {
  return (
    <div className={styles.map}>
      <WorldMap></WorldMap>
    </div>
  );
});
