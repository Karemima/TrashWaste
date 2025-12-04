// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if(email === "user@example.com" && password === "123456") {
      navigate('/dashboard'); // redirect ke dashboard
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="app-title">EcoLife 🌿</h1>
        <p className="subtitle">Selamat datang! Masuk untuk memulai perjalanan hijau-mu.</p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Masukkan email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Masukkan password" required />
          </div>

          <button className="login-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
