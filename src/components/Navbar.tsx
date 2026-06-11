// import {Link} from 'react-router-dom';
// import roomsDataRaw from '../data/rooms.json';
// import {useInventory} from '../context/InventoryContext';
// import { RoomData } from '../types';
// // import Room from './Room';

// const roomsData = RoomsDataRaw as RoomData[];

// function Navbar() {
//   const { inventory } = useInventory();

//   return (
//     <nav className="navbar">
//       <h2>Escape The System</h2>
//       <Link to = "/">Home</Link>
//       roomsData.map(room => (
//         <Link key={room.roomPath} to={`/room/${room.id}`}>{room.name}</Link>
//       ))
//     </nav>
//   )

// }'

import { Link } from 'react-router-dom';
import RoomsDataRaw from '../data/rooms.json';
import { useInventory } from '../context/InventoryContext';
import type { RoomData } from '../types';

const roomsData = RoomsDataRaw as RoomData[];

function Navbar() {
  const { inventory } = useInventory();

  return (
    <nav className="navbar">
      <h2 className="navbar-title">Escape The System</h2>
      <Link to="/" className='nav-link'>Home</Link>
      startsida
      {roomsData.map((room) => (
        <Link key={room.roomPath} to={`/room/${room.roomPath}`} className='nav-link'>
          {room.roomName}
        </Link>
      ))}
    
      <div className="inventory-display">
        <p>inventory</p>
        <span className='inventory-items'>
          {inventory.map(item => item.item).join(', ')}
        </span>
      </div>
    </nav>
  );
}



export default Navbar;
