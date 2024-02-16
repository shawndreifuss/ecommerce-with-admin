import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';


const ChangePassword = () => {
    const Navigate = useNavigate();
    const  params  = useParams();
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');

  const {  newPassword, confirmPassword } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    useEffect(() => {
        if(message === 'Password changed successfully.'){
            handleSuccess(message)
            setTimeout(() => {
            Navigate('/')
            }, 2000)
        }
    }, [message])

    const handleSuccess = (message) => {
        toast.success(message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
        

  const onSubmit = async e => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('New passwords do not match.');
      return;
    }

    try {
      
      const token = params.resetToken
      const password = newPassword
    
      await axios.post(`http://localhost:3001/api/auth/reset-password/${token}`, {
        password,
    });
      setMessage('Password changed successfully.');
    
    } catch (error) {
      setMessage('Error changing password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Change Password</h2>
      {message && <p>{message}</p>}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm New Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit">Change Password</button>
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ChangePassword;