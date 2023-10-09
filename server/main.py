from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from server_cli import ServerCLI
from drone import Drone
from flight import Flight
from history import History

from utils import random_tuple_n_dimension

app = FastAPI()
connected_clients = set()
N_COMMANDS = 7
LOCAL_FE_SERVER_PORT = 5173

app.add_middleware(
    CORSMiddleware,
    allow_origins=[f"http://localhost:{LOCAL_FE_SERVER_PORT}"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def get():
    return "Use web socket /ws to connect to the device"


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    connected_clients.add(websocket)
    server_cli = ServerCLI(websocket)
    print(f"Connection is established")

    world = random_tuple_n_dimension(100, 100, 100)
    drone_starting_position = random_tuple_n_dimension(
        *world
    )  # World dimensions bound the posible positions for the drone
    drone = Drone(drone_starting_position)  # type: ignore
    history = History()
    flight = Flight(world, drone, server_cli, history)  # type: ignore
    await flight.play(N_COMMANDS)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
