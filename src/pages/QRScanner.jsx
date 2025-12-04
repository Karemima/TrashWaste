// src/pages/QRScanner.jsx
import React from 'react';
import Header from '../components/Header';
import './QRScanner.css';

export default function QRScanner() {
  return (
    <div className="qr-container">
      <Header username="Karenina" points={120} />

      <div className="scanner-card">
        <h2>Scan QR Code 🌿</h2>
        <p>Letakkan QR code di dalam kotak hijau untuk check-in dan dapatkan poin!</p>

        <div className="scanner-box">
          <div className="scan-line"></div>
          <p className="mock-text">📷 QR code placeholder</p>
        </div>

        <button className="scan-btn">Simulasikan Scan</button>
      </div>
    </div>
  );
}
