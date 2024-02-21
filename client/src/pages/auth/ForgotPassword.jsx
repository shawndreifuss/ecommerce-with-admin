import React, { useState} from 'react';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

import axios from 'axios';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  //  Handle password reset email 
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
<>
      <div className="text-blueGray-200 cursor-pointer" onClick={() => setOpenModal(true)}>Forgot Password</div>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Reset Password</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <Button type='submit'>Reset Password</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <Link to={'/register'} className="text-cyan-700 hover:underline dark:text-cyan-500">
                Create account
              </Link>
            </div>
          </div>
          </form>
        </Modal.Body>
      </Modal>
    </>

    );
}
  


 
  
  


 

export default ForgotPassword;


// <form onSubmit={handleSubmit}>
    //   <label htmlFor="email">Email Address:</label>
    //   <input
    //     type="email"
    //     id="email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //     required
    //   />
      
    //   <button type="submit">Send Reset Instructions</button>
    // </form>



    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('http://localhost:3001/api/auth/reset-password', { email });
        alert('Please check your email for the password reset instructions.');
      } catch (error) {
        alert('An error occurred, please try again.');
      }
    };