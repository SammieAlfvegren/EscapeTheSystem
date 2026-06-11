import { useParams } from "react-router-dom";
import rooms from "../data/rooms.json";
import { useInventory } from "../context/InventoryContext";

function Room() {
  const { roomPath } = useParams();
  const { inventory } = useInventory();

  const room = rooms.find(
    room => room.roomPath === roomPath
  );

  if (!room) {
    return <h2>Room not found</h2>;
  }

  const roomIsSolved =
    room.itemToAdd !== null &&
    inventory.some(
      item => item.id === room.itemToAdd
    );

  return (
    <div>
      <h1>{room.roomName}</h1>

      <img
        src={
          roomIsSolved
            ? room.solvedImage
            : room.unsolvedImage
        }
        alt={room.roomName}
      />

      <p>
        {roomIsSolved
          ? room.solvedInstruction
          : room.unsolvedInstruction}
      </p>
    </div>
  );
}

export default Room;