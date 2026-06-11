import { useInventory } from "../context/InventoryContext";

function Inventory() {
  const { inventory, selectItem, selectedItemId } = useInventory();

  return (
    <div className="inventory-container">
      <h2>Inventory</h2>

      {inventory.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <div className="inventory-grid">
          {inventory.map((item) => (
            <div key={item.id} 
            
              className={`inventory-item ${selectedItemId === item.id ? 'selected' : ''}`}
              onClick={() => selectItem(item.id)}
            >
              <h4>{item.item}</h4>
              <img
                src={item.image}
                alt={item.item}
                width={80}
              />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Inventory;