import React, { useEffect, useState } from 'react'
import {  Route, Routes } from "react-router-dom";
import { useSelector } from'react-redux'
import { loadUser } from './redux/actions/user'
import { useDispatch } from'react-redux'
import  Store   from './redux/store'


// Layouts 
import Admin from './layouts/admin'
import Auth from './layouts/Auth'
// Pages
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

//  Views
import Landing from './views/Landing'
import Profile from './views/Profile'

const App = () => {
const [isUserAuth, setIsUserAuth] = useState(false)


//  Load User
useEffect(() => {
  Store.dispatch(loadUser())
  const authenticated = Store.getState().user.isAuthenticated
  console.log(Store.getState())
  console.log(authenticated)
   setIsUserAuth(authenticated)
   }, [isUserAuth])
 
    

  return (

   
    <Routes>
      {/* add routes with layouts */}
      <Route path="/admin" element={<Admin/>} />
      <Route path="/auth" element={<Auth/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      {/* add routes without layouts */}

      <Route path="/landing" element={<Landing/>} />
      <Route path="/profile" element={<Profile/>} />
      
      {/* <Route path="/" element={<Index/>} /> */}
      {/* add redirect for first page */}
      {/* <Redirect from="*" to="/" /> */}
    </Routes>
 
  )
}

export default App