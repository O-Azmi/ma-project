import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Cart from './components/Cart';
import Profile from './components/Profile';
import EditProfile from './components/Edit-Profile'
import Authenticate from './components/authenticate'
import './index.css'
import Header from './components/Header';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/authenticate" element={<Authenticate/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/Edit-Profile" element={<EditProfile/>}/>
    </Routes>
  </BrowserRouter>
);
