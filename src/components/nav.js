import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{display:'flex', justifyContent:'space-around'}}>
      <Link to="/">Catalogue</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/contactus">Contact Us</Link>
      <Link to="/about">About</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Nav;
