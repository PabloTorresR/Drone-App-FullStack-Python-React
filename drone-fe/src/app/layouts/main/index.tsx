import React, { memo } from 'react';
import { BottomContainer } from '@app/layouts/main/containers/bottom';

import styles from './styles.module.scss';
import { MapContainer } from './containers/map';

export const MainLayout = memo(() => (
  <div id="main-container" className={styles.mainContainer}>
    <BottomContainer />
    <MapContainer />
    {/* TODO: History component, get history from the socket connection and display it */}
    {/* <History /> */}
  </div>
));

export default MainLayout;
