import React from 'react';

const Cart = () => {
  const staticCartItems = [
    { id: 1, name: 'Product 1', price: 10.0 },
    { id: 2, name: 'Product 2', price: 20.0 }
  ];

  return (
    <div className="container">
      <h1>Cart</h1>
      <ul>
        {staticCartItems.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <div style={{alignItems:'center'}}><button style={{backgroundColor:'green'}}>Buy</button></div>
    </div>
  );
};

export default Cart;
