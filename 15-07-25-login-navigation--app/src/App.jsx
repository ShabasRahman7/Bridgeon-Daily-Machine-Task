import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import { AuthContext } from './context/AuthContext'

function App() {

    const {isAuthenticated} = useContext(AuthContext)
  return (
    <div>
        <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={isAuthenticated?<Home/>:<Navigate to="/login"/>}/>
            <Route path="*" element={<Navigate to="/login"/>}/>
        </Routes>
    </div>
  )
}

export default App