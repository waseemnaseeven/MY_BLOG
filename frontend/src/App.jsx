import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/Pages/About'
import Projects from './components/Pages/Projects'
import Contact from './components/Pages/Contact'
import Music from './components/Pages/Music'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
