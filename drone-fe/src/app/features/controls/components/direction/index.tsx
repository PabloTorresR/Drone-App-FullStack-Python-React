import React, { memo, useCallback } from 'react';
import styles from './styles.module.scss';
import { Directions } from '../../enums/directions';
import classNames from 'classnames';

interface Props {
  onDirectionClick?: (direction: Directions.Arrow) => void;
}

export const DirectionArrows = memo(({ onDirectionClick }: Props) => {
  const handleDirectionClick = useCallback(
    (direction: Directions.Arrow) => () => {
      onDirectionClick?.(direction);
    },
    [onDirectionClick],
  );

  return (
    <div className={styles.directionArrows}>
      {Object.entries(Directions.Arrow).map(([value, key]) => (
        <button
          className={classNames(styles.directionArrows__arrow, styles[`-${value}`])}
          onClick={handleDirectionClick(key)}
          key={value}
        />
      ))}
    </div>
  );
});
