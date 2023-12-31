
import {Routes,Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNot from './pages/PageNot'
import Register from './pages/Register'

import Login from './pages/Login'

function App() {
  

  return (
    
     <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<PageNot/>} />

        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
     </>
    
  )
}

export default App
