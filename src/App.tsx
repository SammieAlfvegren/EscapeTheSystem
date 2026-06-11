import "./App.css";
import { InventoryProvider } from "./context/InventoryContext";
import Navbar from "./components/Navbar";
import Room from "./components/Room";
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomPath" element={<Room />} />
        </Routes>

        {location.pathname !== "/" && <Inventory />}
      </main>
    </>
  );
}

function App() {
  return (
    <InventoryProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </InventoryProvider>
  );
}

export default App;