// src/pages/Tips.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Tips.css';

export default function Tips() {
  const tipsList = [
    { id: 1, title: "Kurangi penggunaan plastik", description: "Bawa tas belanja sendiri dan hindari kantong plastik." },
    { id: 2, title: "Hemat energi listrik", description: "Matikan lampu & peralatan listrik saat tidak digunakan." },
    { id: 3, title: "Tanam pohon di halaman rumah", description: "Pohon membantu menyerap karbon dan membuat lingkungan sejuk." },
    { id: 4, title: "Gunakan transportasi ramah lingkungan", description: "Berjalan kaki, bersepeda, atau gunakan transportasi umum." },
    { id: 5, title: "Daur ulang sampah rumah tangga", description: "Pisahkan sampah organik & anorganik agar mudah didaur ulang." }
  ];

  return (
    <div className="tips-container">
      <h1>Tips Hijau 🌿</h1>
      <div className="tips-grid">
        {tipsList.map(tip => (
          <div key={tip.id} className="tip-card">
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
            <Link to={`/tips/${tip.id}`} className="detail-btn">Lihat Detail</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
