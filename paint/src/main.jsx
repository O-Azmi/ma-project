import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Pages/Homepage';
import Cart from './components/Cart';
import './index.css'
import SignIn from './components/SignIn'

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/SignIn" element={<SignIn/>}/>
    </Routes>
  </BrowserRouter>
);
