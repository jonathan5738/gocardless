import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from '../components/LandingPage/Landing'
import Navbar from './Navbar/Navbar'
import '../css/variables.css'
import '../css/general.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Landing/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App