import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/Pages/About'
import Projects from './components/Pages/Projects'
import Contact from './components/Pages/Contact'

function App() {
  return (
    <>
        <h1>coucou</h1>
      <div className="App-container">
        {/* <Navbar /> */}
        <About />
        <Projects/>
        <Contact/>

      </div>
    </>
  )
}

export default App
