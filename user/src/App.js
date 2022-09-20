import { Route, Routes, BrowserRouter } from 'react-router-dom'
import React, { useEffect } from 'react'
import axios from 'axios'

import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

const App = () => {

  return (
    <main className='site-wrapper'>
      <NavBar />
      <Home />
      <About />
      <Projects />
    </main>
  )

}

export default App
