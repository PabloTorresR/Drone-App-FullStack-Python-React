from enum import Enum


class Messages(Enum):
    MOVEMENT = "movement"
    TAKEOFF = "takeoff"
    LANDING = "landing"
    CRASH_IMMINATE = "crashimminate"
    HISTORY = "history"


class Directions(Enum):
    UP = "movement"
    DOWN = "takeoff"
    LEFT = "left"
    RIGHT = "right"
    FORWARD = "forward"
    BACKWARD = "backward"
