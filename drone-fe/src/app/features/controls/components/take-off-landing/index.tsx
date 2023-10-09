import React, { memo } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { Directions } from '../../enums/directions';

export const LandingTakeoffControls = memo(() => (
  <div className={styles.landing}>
    {Object.entries(Directions.Landing).map(([value, key]) => (
      <button className={classNames(styles.landing__button, styles[`-${key}`])} key={value}>
        <h2>{key.toUpperCase()}</h2>
      </button>
    ))}
  </div>
));
