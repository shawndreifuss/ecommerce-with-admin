import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from './context/UserContext';


// Layouts 
import Auth from './layouts/Auth'
import Main from './layouts/Main'
import SinglePost from './pages/Main/SinglePost';



const App = () => {



  return (
<UserProvider>
<Routes>
       <Route path="/main/*" element={<Main />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/post/*" element={<SinglePost />}/>
       <Route path="*" element={<Navigate to="/main/home" replace />} />  
    </Routes>
  </UserProvider>
  )
}

export default App




//  {/* <Routes>
//       {/* add routes with layouts */}
//       <Route path="/admin" element={<Admin/>} />
//       <Route path="/auth" element={<Auth/>} />
//       <Route path='/login' element={<Login/>} />
//       <Route path='/register' element={<Register/>} />
//       <Route path='/reset-password/:resetToken' element={<ForgotPassword/>} />
//       <Route path="/landing" element={<Landing/>} />
//       <Route path="/blogs" element={<Blogs/>} />
//       <Route path="/blogs/profile/:userId" element={<Profile/>} />
      
//       {/* <Route path="/" element={<Index/>} /> */}
//       {/* add redirect for first page */}
//       {/* <Redirect from="*" to="/" /> */}
//     </Routes> 