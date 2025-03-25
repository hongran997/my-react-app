import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navigate from "./feature/Navigate"
import Home from './feature/Home';
import About from './feature/About';
import Dashboard from './feature/Dashboard';
import Login from './feature/Login';
import UserProfile from './feature/UserProfile';
import ProtectedRoute from './feature/ProtectedRoute';
import { useState } from 'react';

export default function RouterDemo() { 
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = () => { 
    setIsAuth(true);
  }

  const handleLogout = () => { 
    setIsAuth(false);
  }

  return (
    <BrowserRouter>
      <Navigate />
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/dashboard" element={<ProtectedRoute isAuth={ isAuth}>
          <Dashboard />
        </ProtectedRoute>}></Route>
        <Route path="/login" element={<Login login={ handleLogin } />}></Route>
        <Route path="/userProfile/:username" element={<UserProfile />}></Route>
        <Route path="/" element={ <div>404</div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}