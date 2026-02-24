import React from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
        <Navbar />
         <h1>Save More as you order</h1>
        <div style={{display:"flex",flexWrap:"wrap" ,gap:"40px" ,justifyContent:"center"}}>
          <Body />
            <Body />
                <Body />
                 <Body />
            <Body />
                <Body />
                 <Body />
            <Body />
                <Body />
        </div>
        <Footer />
    

    </div>
  )
}

export default App
