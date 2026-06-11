import { createContext, useState, useContext, type ReactNode } from 'react';
import itemsDataRaw from '../data/items.json';
import type { Item } from '../types';

const itemsData = itemsDataRaw as Item[];

interface InventoryContextType {
  inventory: Item[];
  addToInventory: (newItem: Item) => void;
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

export function InventoryProvider({ children }: { children: ReactNode }) {
  //starta med UV Lampa
  const startingItem = itemsData.find(item => item.id === 1);
  
  // State för ryggsäcken.
  const [inventory, setInventory] = useState<Item[]>(startingItem ? [startingItem] : []);

  const addToInventory = (newItem: Item) => {
    // Förhindra dubbletter i ryggsäcken
    if (!inventory.some(item => item.id === newItem.id)) {
      setInventory([...inventory, newItem]);
    }
  };

  return (
    <InventoryContext.Provider value={{ inventory, addToInventory }}>
      {children}
    </InventoryContext.Provider>
  );
}

// hook för att använda ryggsäcken i andra komponenter
export function useInventory() {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error('useInventory måste användas inom en InventoryProvider');
  }
  return context;
}