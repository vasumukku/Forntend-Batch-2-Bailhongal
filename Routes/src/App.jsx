import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'  
import { Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Navbar />} /> 
          <Route path="/body" element={<Body />} /> 
            <Route path="/bottom" element={<Footer />} /> 
      </Routes> 

    
    </div>
  )
}

export default App
