import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import Header from './Components/Header'

export default function App() {
  return (
    <BrowserRouter> 
    <Header></Header>
    <Routes>
      <Route path= "/" element={<Home />}></Route>
      <Route path= "/about" element={<About />}></Route>
      <Route path= "/dashboard" element={<Dashboard />}></Route>
      <Route path= "/sign-in" element={<SignIn />}></Route>
      <Route path= "/sign-up" element={<SignUp />}></Route>
      <Route path= "/projects" element={<Projects />}></Route>

    </Routes>
    </BrowserRouter>
  )
}
