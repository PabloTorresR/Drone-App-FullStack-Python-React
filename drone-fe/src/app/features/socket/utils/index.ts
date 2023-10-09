import { Directions } from '@app/features/controls/enums/directions';
import { Position } from '@app/features/controls/enums/position';

export const mapArrayToPositionObjects = (positionsArray: [number, number, number]): Position => ({
  x: positionsArray[1],
  y: positionsArray[0],
  z: positionsArray[2],
});

export const getDirectionFromMovement = (vector: [number, number, number]): Directions.Vertical | Directions.Arrow => {
  const [x, y, z] = vector;

  if (x !== 0) {
    return x > 0 ? Directions.Arrow.RIGHT : Directions.Arrow.LEFT;
  } else if (y !== 0) {
    return y > 0 ? Directions.Arrow.FORWARD : Directions.Arrow.BACKWARD;
  } else {
    return z > 0 ? Directions.Vertical.UP : Directions.Vertical.DOWN;
  }
};
