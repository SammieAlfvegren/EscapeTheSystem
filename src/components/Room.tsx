import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import rooms from "../data/rooms.json";
import itemsDataRaw from "../data/items.json";
import { useInventory } from "../context/InventoryContext";
import type { Item, RoomData } from "../types";

const itemsData = itemsDataRaw as Item[];
const roomsData = rooms as RoomData[];

function Room() {
  const { roomPath } = useParams<{ roomPath: string }>();

  const { inventory, addToInventory, selectedItemId } = useInventory();
  const [exitRoomSolved, setExitRoomSolved] = useState<boolean>(false);
  
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const room = roomsData.find(r => r.roomPath === roomPath);


  useEffect(() => {
    setFeedbackMessage(null);
  }, [roomPath]);

  if (!room) {
    return <h2>Room not found</h2>;
  }

  const roomIsSolved = room.itemToAdd !== null
    ? inventory.some(item => item.id === room.itemToAdd)
    : exitRoomSolved;

  const handleSolveRoom = () => {

    if (selectedItemId === null) {
      setFeedbackMessage("You need to choose an item in your backpack first!");
      return;
    }

    if (selectedItemId === room.itemToSolve) {
      setFeedbackMessage(null); // Rensa felmeddelandet
      
      if (room.itemToAdd !== null) {
        const rewardItem = itemsData.find(item => item.id === room.itemToAdd);
        if (rewardItem) {
          addToInventory(rewardItem);
        }
      } else {

        setExitRoomSolved(true);
      }
    } else {

      const selectedItem = inventory.find(item => item.id === selectedItemId);
      setFeedbackMessage(` You cant use ${selectedItem?.item || "this item"} here.`);
    }
  };

  return (
    <div className="room-container">
      <h1>{room.roomName}</h1>

      <img
        src={roomIsSolved ? room.solvedImage : room.unsolvedImage}
        alt={room.roomName}
        className="room-image"
      />

      <p className="room-instruction">
        {roomIsSolved ? room.solvedInstruction : room.unsolvedInstruction}
      </p>

      {feedbackMessage && !roomIsSolved && (
        <div className="ui-feedback-prompt">
          {feedbackMessage}
        </div>
      )}

      <div className="room-actions">
        {!roomIsSolved ? (
          <button onClick={handleSolveRoom} className="btn-solve">
            Use selected object
          </button>
        ) : (
          <div className="solved-badge">
            {room.itemToAdd === null && <h2>Freedom! You have escaped from the system!</h2>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Room;