import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onDeleteItem, onToggleItem, setItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "quantity") {
    sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity);
  } else if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  } else {
    sortedItems = items;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="sort">Sort by</option>
          <option value="description">Description</option>
          <option value="quantity">Quantity</option>
          <option value="packed">Packed</option>
        </select>
        <button onClick={() => setItems([])}>Clear list</button>
      </div>
    </div>
  );
}
