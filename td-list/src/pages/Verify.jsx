/* VerifyPage.jsx */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './verify.css';

const VerifyPage = () => {
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const url = `https://free-todo-api.vercel.app/user/verify-email?token=${token}`;

  const handleVerify = async () => {
    if (!token.trim()) {
      alert('Please enter a verification token.');
      return;
    }

    try {
      await axios.get(url);
      alert('Email verified successfully!');
      navigate('/login');
    } catch (error) {
      console.error('Verification failed', error);
      alert('Verification failed. Please check the token and try again.');
    }
  };

  return (
    <div className="verify-page">
      <h2>Verify Email</h2>
      <input
        type="text"
        placeholder="Verification Token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <button onClick={handleVerify}>Verify Email</button>
    </div>
  );
};

export default VerifyPage;
