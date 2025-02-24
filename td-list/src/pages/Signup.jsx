import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const baseUrl = "http://localhost:5173/"

  const url = 'https://free-todo-api.vercel.app/user/sign-up';

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      const response = await axios.post(url, { email, password });
      console.log(response);
      alert(response.data.message);
      navigate('/verify');
    } catch (error) {
      console.error('Signup failed', error);
      alert(error.response?.data?.error || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="signup-page">
      <h2>Signup Page</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
      <p onClick={() => navigate('/login')}>
        Already have an account? Log in
      </p>
    </div>
  );
};

export default SignupPage;

