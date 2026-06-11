export interface Item {
  id: number;
  item: string;
  description: string;
  image: string;
  name: string;
}

export interface RoomData {
  id: number;
  roomName: string;
  roomPath: string;
  unsolvedInstruction: string;
  solvedInstruction: string;
  hint: string;
  unsolvedImage: string;
  solvedImage: string;
  itemToSolve: number;
  itemToAdd: number | null;
}