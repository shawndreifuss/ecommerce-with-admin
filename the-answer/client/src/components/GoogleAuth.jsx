import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import  { jwtDecode }  from "jwt-decode";


const GoogleAuth = () => {
  return (
    
    <GoogleLogin
    onSuccess={credentialResponse => {
      const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
      console.log(credentialResponseDecoded);
    }}
    onError={() => {
      console.log('Login Failed');
    }}/>
  )
}

export default GoogleAuth