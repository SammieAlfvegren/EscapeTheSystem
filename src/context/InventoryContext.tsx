import { createContext, useState, useContext, type ReactNode } from 'react';
import itemsDataRaw from '../data/items.json';
import type { Item } from '../types';

const itemsData = itemsDataRaw as Item[];

interface InventoryContextType {
  inventory: Item[];
  addToInventory: (newItem: Item) => void;
  selectedItemId: number | null;
  selectItem: (id: number) => void;
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

export function InventoryProvider({ children }: { children: ReactNode }) {

  const startingItem = itemsData.find(item => item.id === 1);
  const [inventory, setInventory] = useState<Item[]>(startingItem ? [startingItem] : []);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const addToInventory = (newItem: Item) => {
    if (!inventory.some(item => item.id === newItem.id)) {
      setInventory([...inventory, newItem]);
    }
  };

  const selectItem = (id: number) => {

    setSelectedItemId(prevId => prevId === id ? null : id);
  };

  return (
    <InventoryContext.Provider value={{ inventory, addToInventory, selectedItemId, selectItem }}>
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventory() {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error('useInventory måste användas inom en InventoryProvider');
  }
  return context;
}