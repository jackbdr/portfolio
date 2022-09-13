import { Route, Routes, BrowserRouter } from 'react-router-dom'
import React, { useEffect } from 'react'
import axios from 'axios'

import NavBar from './components/NavBar'

const App = () => {

  return (
    <main className='site-wrapper'>
      <NavBar />
    </main>
  )

}

export default App
