import React, { useEffect} from 'react'
import {  Route, Routes } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import { useUser } from './context/UserContext';

// Layouts 
import Admin from './layouts/admin'
import Auth from './layouts/Auth'
// Pages
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

//  Views
import Landing from './views/Landing'
import Profile from './views/Profile'
import Blogs from './views/Blogs';

const App = () => {


  return (
<UserProvider>
    <Routes>
      {/* add routes with layouts */}
      <Route path="/admin" element={<Admin/>} />
      <Route path="/auth" element={<Auth/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path="/landing" element={<Landing/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/blogs/profile/:userId" element={<Profile/>} />
      
      {/* <Route path="/" element={<Index/>} /> */}
      {/* add redirect for first page */}
      {/* <Redirect from="*" to="/" /> */}
    </Routes>
  </UserProvider>
  )
}

export default App