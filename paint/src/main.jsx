import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Cart from './components/Cart';
import './index.css'
import Authenticate from './components/authenticate'

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/authenticate" element={<Authenticate/>}/>
    </Routes>
  </BrowserRouter>
);
