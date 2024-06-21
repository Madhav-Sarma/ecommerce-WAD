import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/nav';
import Footer from './components/footer';
import Catalogue from './components/catalouge';
import Cart from './components/kart';
import ContactUs from './components/contact';
import About from './components/about';
import Register from './components/registration';
import Login from './components/login';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <div style={{position:'fixed',left:0,bottom:0,right:0}}><Footer/></div>
    </div>
  );
}

export default App;
