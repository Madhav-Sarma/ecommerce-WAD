import React from 'react';
import { products } from '../data/products';

const Catalogue = ({ addToCart }) => {
  return (
    <div>
      <h1>Catalogue</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogue;
