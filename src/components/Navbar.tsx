import { Link } from "react-router-dom";
import RoomsDataRaw from "../data/rooms.json";
import { useInventory } from "../context/InventoryContext";
import type { RoomData } from "../types";

const roomsData = RoomsDataRaw as RoomData[];

function Navbar() {
  const { inventory } = useInventory();

  return (
    <nav className="h-[73px] bg-zinc-900 border-b border-zinc-800 px-6">

      <div className="max-w-7xl mx-auto h-full flex items-center gap-6">

        <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Escape The System
        </h2>

        <Link
          to="/"
          className="text-zinc-300 hover:text-cyan-400"
        >
          Home
        </Link>

        {roomsData.map((room) => (
          <Link
            key={room.roomPath}
            to={`/room/${room.roomPath}`}
            className="text-zinc-300 hover:text-cyan-400"
          >
            {room.roomName}
          </Link>
        ))}

        <div className="ml-auto text-zinc-400">
          Items:
          <span className="ml-2 text-cyan-400 font-bold">
            {inventory.length}
          </span>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;