import "./App.css";
import { InventoryProvider } from "./context/InventoryContext";
import Navbar from "./components/Navbar";
import Room from "./components/Room";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, BrowserRouter, Route,  } from "react-router-dom";


function App() {
  return(
    <InventoryProvider>
      <BrowserRouter>
      {/* dynamisk navbar och ryggsäck som visas i alla rum*/}
      <Navbar />
      <Routes>
        {/*startsida */}
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomPath" element={<Room />} />
      </Routes>
      </BrowserRouter>
      </InventoryProvider>
  );
}

export default App;
