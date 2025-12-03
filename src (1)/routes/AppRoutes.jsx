// src/routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import MainDashboard from '../pages/MainDashboard';
import Tips from '../pages/Tips';
import TipDetail from '../pages/TipDetail';
import QRScanner from '../pages/QRScanner';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/tips/:id" element={<TipDetail />} />
        <Route path="/qr-scanner" element={<QRScanner />} />
      </Routes>
    </BrowserRouter>
  );
}
