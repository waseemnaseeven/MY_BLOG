import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/Pages/About'
import Projects from './components/Pages/Projects'
import Contact from './components/Pages/Contact'
import Music from './components/Pages/Music'
import Footer from './components/Footer/Footer'

function App() {
  return (
      <div className="App-container">
        <Navbar />
        <About />
        <Projects/>
        <Music />
        <Contact/>
        <Footer />
      </div>
  )
}

export default App
