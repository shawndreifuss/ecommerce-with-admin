import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  // Handle Reset Password
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/auth/reset-password', { email });
      alert('Please check your email for the password reset instructions.');
    } catch (error) {
      alert('An error occurred, please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Send Reset Instructions</button>
    </form>
  );
};

export default ResetPassword;