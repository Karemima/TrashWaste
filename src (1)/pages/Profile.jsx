// src/pages/Profile.jsx
import React from 'react';
import Header from '../components/Header';
import './Profile.css';

export default function Profile() {
  // Data dummy, nanti bisa diganti sesuai login user
  const user = {
    name: "Karenina Martawita",
    points: 120,
    achievements: [
      { id: 1, title: "Mengurangi penggunaan plastik", earned: true },
      { id: 2, title: "Menanam pohon", earned: true },
      { id: 3, title: "Hemat energi listrik", earned: false },
    ]
  };

  return (
    <div className="profile-container">
      <Header username={user.name} points={user.points} />

      <div className="profile-card">
        <h2>{user.name}</h2>
        <p className="points">🌱 Poin: {user.points}</p>

        <h3>Achievements</h3>
        <ul className="achievement-list">
          {user.achievements.map(item => (
            <li key={item.id} className={item.earned ? "earned" : "locked"}>
              {item.title} {item.earned ? "✅" : "🔒"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
