import React, { useState } from 'react';

function Stock() {
  const [stockItems, setStockItems] = useState([
    { id: 1, name: 'Product A', quantity: 10 },
    { id: 2, name: 'Product B', quantity: 5 },
    { id: 3, name: 'Product C', quantity: 15 },
    { id: 4, name: 'Product D', quantity: 20 },
    { id: 5, name: 'Product E', quantity: 8 },
  ]);

  const handleEdit = (id) => {
    console.log(`Editing item with ID: ${id}`);
  };

  return (
    <div>
      <h2>Stock</h2>
      <ul>
        {stockItems.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => handleEdit(item.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stock;