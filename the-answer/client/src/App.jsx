import React from 'react'

import {  Route, Routes } from "react-router-dom";

// Layouts 
import Admin from './layouts/admin'
import Auth from './layouts/Auth'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'


import Landing from './views/Landing'
import Profile from './views/Profile'




const App = () => {
  return (
    
    <Routes>
      {/* add routes with layouts */}
      <Route path="/admin" element={<Admin/>} />
      <Route path="/auth" element={<Auth/>} />
      {/* add routes without layouts */}
      <Route path="/landing" element={<Landing/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      {/* <Route path="/" element={<Index/>} /> */}
      {/* add redirect for first page */}
      {/* <Redirect from="*" to="/" /> */}
    </Routes>
 
  )
}

export default App