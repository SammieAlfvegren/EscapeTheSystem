import "./App.css";
import { InventoryProvider } from "./context/InventoryContext";

import Navbar from "./components/Navbar";
import Inventory from "./components/Inventory";
import Room from "./components/Room";
import Home from "./components/Home";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <InventoryProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-zinc-950 text-zinc-100">
          <Navbar />
          <div className="flex h-[calc(100vh-73px)]">
            <Inventory />
            <main className="flex-1 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/room/:roomPath"
                  element={<Room />}
                />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </InventoryProvider>
  );
}

export default App;