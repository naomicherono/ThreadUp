// AppRouter.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Products from '../pages/Products';
import LandingPage from '../pages/LandingPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} /> {/* Default landing page */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default AppRouter;