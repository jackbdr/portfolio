import { Route, Routes, BrowserRouter } from 'react-router-dom'
import React, { useEffect } from 'react'
import axios from 'axios'

import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Interests from './components/Interests'
import Contact from './components/Contact'

const App = () => {

  return (
    <main className='site-wrapper'>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Interests />
      <Contact />
    </main>
  )

}

export default App
