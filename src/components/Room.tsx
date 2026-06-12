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

  const [exitRoomSolved, setExitRoomSolved] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const room = roomsData.find((r) => r.roomPath === roomPath);

  useEffect(() => {
    setFeedbackMessage(null);
  }, [roomPath]);

  if (!room) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-red-400">
          Room not found
        </h2>
      </div>
    );
  }

  const roomIsSolved =
    room.itemToAdd !== null
      ? inventory.some((item) => item.id === room.itemToAdd)
      : exitRoomSolved;

  const handleSolveRoom = () => {
    if (selectedItemId === null) {
      setFeedbackMessage(
        "You need to select an item from your inventory first."
      );
      return;
    }

    if (selectedItemId === room.itemToSolve) {
      setFeedbackMessage(null);

      if (room.itemToAdd !== null) {
        const rewardItem = itemsData.find(
          (item) => item.id === room.itemToAdd
        );

        if (rewardItem) {
          addToInventory(rewardItem);
        }
      } else {
        setExitRoomSolved(true);
      }
    } else {
      const selectedItem = inventory.find(
        (item) => item.id === selectedItemId
      );

      setFeedbackMessage(
        `The ${selectedItem?.item || "item"} cannot be used here.`
      );
    }
  };

 return (
  <main className="bg-zinc-950 text-zinc-100 px-4 py-4">
    <div className="max-w-5xl mx-auto">
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">

        {/* Header */}
        <div className="border-b border-zinc-800 px-6 py-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {room.roomName}
          </h1>
        </div>

        {/* Image */}
        <img
        src={roomIsSolved ? room.solvedImage : room.unsolvedImage}
        alt={room.roomName}
        className="w-full max-h-[280px] object-contain"/>

        {/* Content */}
        <div className="p-6">
          <p className="text-zinc-300 leading-relaxed">
            {roomIsSolved
              ? room.solvedInstruction
              : room.unsolvedInstruction}
          </p>
          {!roomIsSolved && (
            <div className="mt-4 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-4">
              <p className="text-sm text-cyan-300">
                Hint: {room.hint}
              </p>
            </div>
          )}
          {feedbackMessage && !roomIsSolved && (
            <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
              <p className="text-red-300">
                {feedbackMessage}
              </p>
            </div>
          )}
          <div className="mt-6">
            {!roomIsSolved ? (
              <button
                onClick={handleSolveRoom}
                className="
                  rounded-xl
                  bg-cyan-500
                  px-6
                  py-3
                  font-semibold
                  text-black
                  transition-all
                  hover:bg-cyan-400
                  hover:scale-105
                "
              >
                Use Selected Item
              </button>
            ) : (
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4">

                <p className="font-semibold text-green-300">
                  Puzzle Solved ✓
                </p>

                {room.itemToAdd === null && (
                  <h2 className="mt-2 text-2xl font-bold text-green-400">
                    Freedom! You escaped Project NEXUS.
                  </h2>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </main>
);
}

export default Room;