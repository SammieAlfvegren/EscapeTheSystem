import { useInventory } from "../context/InventoryContext";

function Inventory() {
  const { inventory } = useInventory();

  return (
    <div>
      <h2>Inventory</h2>

      {inventory.length === 0 ? (
        <p>No items found.</p>
      ) : (
        inventory.map((item) => (
          <div key={item.id}>
            <h4>{item.name}</h4>

            <img
              src={item.image}
              alt={item.name}
              width={80}
            />

            <p>{item.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Inventory;