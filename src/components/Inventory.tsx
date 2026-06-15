import { useInventory } from "../context/InventoryContext";

function Inventory() {
  const { inventory, selectItem, selectedItemId } = useInventory();

  return (
    <aside className="w-72 bg-zinc-900 border-r border-zinc-800 p-4 overflow-y-auto">
      <h2 className="text-xl font-bold text-cyan-400 mb-4">
        Inventory
      </h2>
      <div className="space-y-3">
        {inventory.map((item) => (
          <div
            key={item.id}
            onClick={() => selectItem(item.id)}
            className={`
              cursor-pointer
              rounded-xl
              border
              p-3
              transition-all
              duration-300
              transform
              
              hover:scale-110
              hover:-translate-y-2
              hover:border-cyan-300
              hover:bg-cyan-500/15
              hover:shadow-2xl
              hover:shadow-cyan-500/50

              ${
                selectedItemId === item.id
                  ? `
                    border-cyan-400
                    bg-cyan-500/20
                    scale-105
                    shadow-2xl
                    shadow-cyan-500/60
                    ring-2
                    ring-cyan-400/50
                  `
                  : `
                    border-zinc-700
                    bg-zinc-800
                  `
              }
            `}
          >
            <img
              src={item.image}
              alt={item.item}
              className="w-20 h-20 mx-auto object-contain mb-3"
            />
            <h4 className="text-center font-semibold text-zinc-100">
              {item.item}
            </h4>
            <p className="text-xs text-zinc-400 text-center mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Inventory;