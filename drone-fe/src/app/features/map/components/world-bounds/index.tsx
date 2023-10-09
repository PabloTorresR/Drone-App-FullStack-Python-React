import React, { memo, useMemo } from 'react';
import styles from './styles.module.scss';
import { MAX_API_HEIGHT, MAX_API_WIDTH, MAX_WORLD_WIDTH, MAX_WORLD_HEIGHT } from '../../constants';
import { Drone } from '@app/features/controls/components/drone';
import { useLandedSelector, usePositionSelector } from '@app/features/controls/context/selectors';
import { Directions } from '@app/features/controls/enums/directions';
import classNames from 'classnames';

interface Props {
  width?: number;
  height?: number;
  highlightedWall?: Directions.Arrow | Directions.Vertical | null;
}

export const WorldBounds = memo(({ width, height, highlightedWall }: Props) => {
  const dronePosition = usePositionSelector();
  const landed = useLandedSelector();

  const boxStyle = useMemo(() => {
    const boxWidth = ((width ?? 0) * MAX_WORLD_WIDTH) / MAX_API_WIDTH;
    const boxHeight = ((height ?? 0) * MAX_WORLD_HEIGHT) / MAX_API_HEIGHT;
    return {
      width: `${boxWidth}px`,
      height: `${boxHeight}px`,
    };
  }, [width, height]);
  return (
    <div className={classNames(styles.worldBounds, styles[`-active${highlightedWall}`])} style={boxStyle}>
      <Drone height={dronePosition?.value?.x} width={dronePosition?.value?.y} landed={landed?.value} />
    </div>
  );
});
