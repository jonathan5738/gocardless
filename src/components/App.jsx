import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from '../components/LandingPage/Landing'
import '../css/variables.css'
import '../css/general.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App