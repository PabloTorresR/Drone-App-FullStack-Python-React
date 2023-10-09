from typing import Protocol

from app_types import Movement, Position, World
from history import History


class Controller(Protocol):
    def display_initialising(self):
        raise NotImplementedError()

    def display_drone_start_position(self, start_position: Position, world: World):
        raise NotImplementedError()

    def display_takeoff(self):
        raise NotImplementedError()

    def display_movement(
        self, movement: Movement, new_position: Position, total_distance: float
    ):
        raise NotImplementedError()

    def display_landing(self):
        raise NotImplementedError()

    def read_movement_command(self):
        raise NotImplementedError()

    def display_crash_imminate(self, movement: Movement):
        raise NotImplementedError()

    def display_history(self, history: History):
        raise NotImplementedError()
