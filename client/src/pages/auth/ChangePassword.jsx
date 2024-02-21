import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Button,  Label, TextInput } from 'flowbite-react';
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
    <>
  <div className='flex w-screen h-screen items-center justify-center bg-gray-100'>
    <form className="flex max-w-lg flex-col gap-4" onSubmit={onSubmit}>
      {message && <p>{message}</p>}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput  type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={onChange}
            required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="confirmPassword" value="Repeat password" />
        </div>
        <TextInput  type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            requiredrequired shadow />
      </div>
     
      <Button type="submit">Change Password</Button>
    </form>
    </div>
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
      </>

    
  );
};

export default ChangePassword;



