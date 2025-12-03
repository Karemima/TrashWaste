// src/pages/MainDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './MainDashboard.css';

export default function MainDashboard() {
  return (
    <div className="dashboard-container">
      <Header username="Karenina" points={120} />

      <main>
        {/* Quick Menu Interaktif */}
        <section className="quick-menu">
          <Link to="/tips" className="menu-card">
            <div className="icon">📘</div>
            <h3>Tips</h3>
            <p>Pelajari tips hijau untuk lingkungan</p>
          </Link>
          <Link to="/qr-scanner" className="menu-card">
            <div className="icon">📷</div>
            <h3>QR Scanner</h3>
            <p>Scan QR untuk check-in dan reward</p>
          </Link>
          <Link to="/profile" className="menu-card">
            <div className="icon">👤</div>
            <h3>Profile</h3>
            <p>Lihat nama dan achievement kamu</p>
          </Link>
        </section>

        {/* Highlight Tips */}
        <section className="tips-section">
          <h2>Tips Hijau Terbaru 🌿</h2>
          <ul>
            <li><Link to="/tips/1">Kurangi penggunaan plastik sekali pakai</Link></li>
            <li><Link to="/tips/2">Hemat energi listrik di rumah</Link></li>
            <li><Link to="/tips/3">Tanam pohon di lingkungan sekitar</Link></li>
          </ul>
        </section>
      </main>
    </div>
  );
}
