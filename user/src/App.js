import { Route, Routes, BrowserRouter } from 'react-router-dom'
import React, { useEffect } from 'react'
import axios from 'axios'

import NavBar from './components/NavBar'
import Home from './components/Home'

const App = () => {

  return (
    <main className='site-wrapper'>
      <NavBar />
      <Home />
    </main>
  )

}

export default App
