from fastapi import WebSocket
from app_types import Movement, Position, World
from history import History
from utils import MOVEMENTS
from request_response import Messages
from typing import Coroutine


class ServerCLI:
    def __init__(self, websocket):
        self.websocket: WebSocket = websocket

    def read_world_bounds(self):
        pass

    async def display_initialising(self):
        pass

    async def display_drone_start_position(
        self, start_position: Position, world_bounds: World
    ) -> None:
        await self.websocket.send_json(
            {
                "message": Messages.TAKEOFF.value,
                "payload": {
                    "initial_position": start_position,
                    "world_bounds": world_bounds,
                },
            }
        )

    def display_takeoff(self):
        pass

    async def display_movement(
        self, movement: Movement, new_position: Position, total_distance: float
    ):
        await self.websocket.send_json(
            {
                "message": Messages.MOVEMENT.value,
                "payload": {
                    "movement": movement,
                    "new_position": new_position,
                    "total_distance": total_distance,
                },
            }
        )

    async def display_landing(self):
        await self.websocket.send_json({"message": "landing"})

    async def read_movement_command(self):
        while True:
            data = await self.websocket.receive_json()
            print(data)
            message = data.get("message")
            if message == Messages.MOVEMENT.value:
                payload = data.get("payload", {})
                direction = payload["direction"].upper()
                distance = payload["distance"]
                if direction.upper() in MOVEMENTS and distance:
                    return tuple(axis * int(distance) for axis in MOVEMENTS[direction])  # type: ignore
            else:
                await self.websocket.send_text(f"Unknown command: {data}")
                raise ValueError(f"Unknown command: {data}")

    async def display_crash_imminate(self, movement: Movement):
        await self.websocket.send_json(
            {
                "message": Messages.CRASH_IMMINATE.value,
                "payload": {
                    "movement": movement,
                },
            }
        )

    async def display_history(self, history: History):
        await self.websocket.send_json(
            {
                "message": Messages.HISTORY.value,
                "payload": {
                    "history": history,
                },
            }
        )
