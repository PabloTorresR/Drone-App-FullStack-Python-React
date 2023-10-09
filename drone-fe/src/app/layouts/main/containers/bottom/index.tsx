import React, { memo, useCallback } from 'react';
import styles from '../../styles.module.scss';
import { DirectionArrows } from '@app/features/controls/components/direction';
import { DistanceSlider } from '@app/features/controls/components/distance-slider';
import { UpDownControls } from '@app/features/controls/components/up-down';
import { useSocketActionsSelector } from '@app/features/socket/context/selectors';
import { useDistanceSelector } from '@app/features/controls/context/selectors';
import { Directions } from '@app/features/controls/enums/directions';
import { Messages } from '@app/features/socket/enums/messages';

export const BottomContainer = memo(() => {
  const socketActions = useSocketActionsSelector();
  const distance = useDistanceSelector();

  const handleSendDroneMoveCommand = useCallback(
    (direction: Directions.Arrow | Directions.Vertical) => {
      socketActions?.sendMessage({
        message: Messages.MOVEMENT,
        payload: { direction: direction, distance: distance?.value },
      });
    },
    [socketActions, distance],
  );

  return (
    <div className={styles.bottomContainer}>
      <div className={styles.bottomContainer__left}>
        <UpDownControls onDirectionClick={handleSendDroneMoveCommand} />
        <DirectionArrows onDirectionClick={handleSendDroneMoveCommand} />
        <DistanceSlider />
      </div>
      <div className={styles.bottomContainer__right}>
        {/* TODO: Add support to stop the flight or restart it using new socket connection */}
        {/* <LandingTakeoffControls /> */}
      </div>
    </div>
  );
});
