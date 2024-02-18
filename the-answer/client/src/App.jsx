import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login, Homepage, Register } from './pages'



const App = () => {
  return (

    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
       <Route path="/login" element={<Login/>} />
       <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App