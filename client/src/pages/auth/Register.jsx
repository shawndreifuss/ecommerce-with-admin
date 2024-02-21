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
    confirmPassword: "",
  });

  const { username, email, password, confirmPassword } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      handleError("Password do not match");
    }
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
          navigate("/blogs");
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
      confirmPassword: "",
    });
  };
// Handle Error with toast
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
// Handle Success with toast
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

  return (
    <>
    <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url('assets/img/register_bg_2.png')"
            }}
          ></div>
     <div className="container mx-auto px-4 h-full">
  <div className="flex content-center items-center justify-center h-full">
    <div className="w-full lg:w-6/12 px-4">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
        <div className="rounded-t mb-0 px-6 py-6">
          <div className="text-center mb-3">
            <h6 className="text-blueGray-500 text-sm font-bold">
              Sign up with
            </h6>
          </div>
          <div className="btn-wrapper text-center">
          </div>
          <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src='../../assets/github.svg'
                    />
                    Github
                  </button>
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src='../../assets/google.svg'
                    />
                    Google
                  </button>
                </div>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <div className="text-blueGray-400 text-center mb-3 font-bold">
            <small>Or sign up with credentials</small>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                UserName
              </label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Name"
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                autoComplete="email"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Email"
              />
            </div>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Password"
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Password"
              />
            </div>

            <div>
              <label className="inline-flex items-center cursor-pointer">
                <span className="ml-2 text-sm font-semibold text-blueGray-600">
                  Already have an account? <Link className="underline text-blue-700" to={'/login'} >Login!</Link>
                  <div 
                    href="#pablo"
                    className="text-lightBlue-500"
                    
                  >
                     
                  </div>
                
                </span>
              </label>
            </div>
            <div className="text-center mt-6">
              <button
                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="submit"
              >
                Create Account
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
    
  </div>
  
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
    </section>
    </>
  );
};

export default Register;

