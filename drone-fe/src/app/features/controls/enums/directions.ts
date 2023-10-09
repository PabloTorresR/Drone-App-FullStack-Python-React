// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Directions {
  export enum Arrow {
    FORWARD = 'forward',
    RIGHT = 'right',
    LEFT = 'left',
    BACKWARD = 'backward',
  }

  export enum Vertical {
    UP = 'up',
    DOWN = 'down',
  }

  export enum Landing {
    LANDING = 'landing',
    TAKEOFF = 'takeoff',
  }
}
