import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleError = (error) => {
    toast.error(error, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSuccess = (message) => {
      toast.success(message , {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
       

        });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/auth/register",
        {
          ...user,
        },
        {
          withCredentials: true,
        }
      );
      
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        handleError(message);
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
    setUser({
      ...user,
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          autoComplete="username"
          value={username}
          placeholder="enter username"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          placeholder="enter email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          suggested="current-password"
          autoComplete="on"
          value={password}
          placeholder="enter password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <span>
        have an account? <Link to={"/login"}>Login</Link>
      </span>
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

export default Register;
