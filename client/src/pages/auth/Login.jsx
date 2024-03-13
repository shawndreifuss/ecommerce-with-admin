import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import ForgotPassword from "./ForgotPassword";
import { useUser } from "../../context/UserContext";


const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { dispatch } = useUser();

  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/auth/me", {
        withCredentials: true,
      });
      // Dispatch action to set user
      dispatch({ type: "SET_USER", payload: response.data.user });

    } catch (error) {
      console.error("Failed to fetch user", error);
    }
  };

  //  Getting google response and decoding it
  const [credentialResponseDecoded, setCredentialResponseDecoded] =
    useState(null);
  //  Checking if the user has successfully logged in
  const [onSuccess, setOnSuccess] = useState(false);

  //  Handle Google OAuth Response
  const handleCredentialResponse = async (credentialResponseDecoded) => {
    if (credentialResponseDecoded === null) {
      return;
    } else {
      const data = credentialResponseDecoded;
      setOnSuccess(true);
      fetchUserData();
      const user = {
        username: data.name,
        email: data.email,
        password: data.sub,
      };
      try {
        //  Send data to the server
        const sendData = await axios.post(
          "http://localhost:3001/api/auth/oauth",
          {
            ...user,
          },
          {
            withCredentials: true,
          }
        );
        const { success, message, token } = sendData.data;
        if (success) {
          fetchUserData();
          handleSuccess(message);
          setLoading(true);
          setTimeout(() => {
            location.reload();
            navigate("/main/home", { replace: true });
          }, 3000);
        } else {
          console.log(message);
        }
      } catch (error) {
        console.log("error");
      }
    }
  };

  //  If the user has successfully logged in, redirect to the home page
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  //  Handle Error and Success with toast
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
    toast.success(message, {
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
        "http://localhost:3001/api/auth/login",
        {
          ...user,
        },
        {
          withCredentials: true,
        }
      );

      const { success, message, token } = data;
      if (success) {
        localStorage.setItem("token", token);
        handleSuccess(message);
        setTimeout(() => {
          navigate("/main/home", { replace: true });
        }, 3000);
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError(error.response.data.message);
    }
  };

  return (
    <>
      {/*  Loader */}
      {loading ? (
        <></>
      ) : (
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('assets/img/register_bg_2.png')",
            }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-blueGray-500 text-sm font-bold">
                        Sign in with
                      </h6>
                    </div>
                    <div className="flex justify-center align-center w-full h-full">
                      <GoogleLogin
                        onSuccess={(credentialResponse) => {
                          const decoded = jwtDecode(
                            credentialResponse.credential
                          );
                          setCredentialResponseDecoded(decoded);
                          setOnSuccess(true);
                          handleCredentialResponse(decoded);
                        }}
                        onError={() => {
                          console.log("Login Failed");
                        }}
                        className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                        type="button"
                      >
                        <img
                          alt="..."
                          className="w-5 mr-1"
                          src="../../assets/google.svg"
                        />
                        Google
                      </GoogleLogin>
                    </div>
                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-blueGray-400 text-center mb-3 font-bold">
                      <small>Or sign in with credentials</small>
                    </div>
                    <form onSubmit={handleSubmit}>
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
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                          />
                          <span className="ml-2 text-sm font-semibold text-blueGray-600">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6 relative">
                  <div className="w-1/2">
                    <ForgotPassword />
                  </div>
                  <div className="w-1/2 text-right">
                    <Link to="/auth/register" className="text-blueGray-200">
                      <small>Create new account</small>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
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

export default Login;
