import React, { memo } from 'react';
import ReactSlider from 'react-slider';
import styles from './styles.module.scss';
import { useDistanceSelector } from '../../context/selectors';

export const DistanceSlider = memo(() => {
  const distance = useDistanceSelector();
  return (
    <div className={styles.distanceSlider__container}>
      <ReactSlider
        className={styles.distanceSlider}
        trackClassName={styles.distanceSlider__track}
        thumbClassName={styles.distanceSlider__thumb}
        markClassName={styles.distanceSlider__mark}
        defaultValue={0}
        orientation="vertical"
        marks
        max={distance?.maxDistance}
        min={0}
        step={1}
        onChange={distance?.handleIntensityChange}
        invert
      />
      <div className={styles.distanceSlider__distance}>
        <span className={styles.distanceSlider__distance__label}>{'✈ Distance'}</span>
        <span className={styles.distanceSlider__distance__value}>{distance?.value ?? 2}</span>
      </div>
    </div>
  );
});
