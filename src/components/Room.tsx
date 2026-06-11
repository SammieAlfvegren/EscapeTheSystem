import { useParams } from "react-router-dom";
import rooms from "../data/rooms.json";

function Room() {
  const { roomPath } = useParams();

  const room = rooms.find(
    (room) => room.roomPath === roomPath
  );

  if (!room) {
    return <h2>Room not found</h2>;
  }

  return (
    <div>
      <h1>{room.roomName}</h1>

      <img
        src={room.unsolvedImage}
        alt={room.roomName}
        width="600"
      />

      <p>{room.unsolvedInstruction}</p>
    </div>
  );
}

export default Room;