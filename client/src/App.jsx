
import {Routes,Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNot from './pages/PageNot'

function App() {
  

  return (
    
     <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<PageNot/>} />
      </Routes>
     </>
    
  )
}

export default App
