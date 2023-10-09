import React, { memo, useCallback } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { Directions } from '../../enums/directions';

interface Props {
  onDirectionClick?: (direction: Directions.Vertical) => void;
}

export const UpDownControls = memo(({ onDirectionClick }: Props) => {
  const handleDirectionClick = useCallback(
    (direction: Directions.Vertical) => () => {
      onDirectionClick?.(direction);
    },
    [onDirectionClick],
  );
  return (
    <div className={styles.directionVertical}>
      {Object.entries(Directions.Vertical).map(([value, key]) => (
        <button
          className={classNames(styles.directionVertical__button, styles[`-${key}`])}
          key={value}
          onClick={handleDirectionClick(key)}
        >
          <h2>{key.toUpperCase()}</h2>
        </button>
      ))}
    </div>
  );
});
