import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  const products = [
    { id: 1, name: 'Product A', quantity: 10 },
    { id: 2, name: 'Product B', quantity: 5 },
    { id: 3, name: 'Product C', quantity: 15 },
    { id: 4, name: 'Product D', quantity: 8 },
    { id: 5, name: 'Product E', quantity: 12 },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Products</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - Quantity: {product.quantity}
            <Link to={`/details/${product.id}`}>
              <button>See Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchProducts;