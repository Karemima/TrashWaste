// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({ username = "User", points = 120 }) {
  return (
    <header className="header">
      <div className="logo">EcoLife 🌿</div>
      <div className="profile-section">
        <span className="points">🌱 {points} pts</span>
        <Link to="/profile">
          <img src="https://via.placeholder.com/40" alt="Profile" className="profile-pic" />
        </Link>
      </div>
    </header>
  );
}
