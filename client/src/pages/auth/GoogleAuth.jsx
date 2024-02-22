import React, { useState} from 'react'
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

//  Getting google response and decoding it
const GoogleAuth = () => {
  
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
    const { success, message, token  } = sendData.data;
    if (success) {
      localStorage.setItem("token", token); 
      handleSuccess(message);
      setLoading(true);
      setTimeout(() => {
        navigate("/landing");
      }, 3000);
    } else {
      handleError(message);
    }
  } catch (error) {
    console.log("error");
  }
}
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


return (
    <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      const decoded = jwtDecode(credentialResponse.credential);
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
  )
}

export default GoogleAuth