import React from 'react'
import Body from './components/Body'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from "./components/Login"
import { useState } from 'react'
const App = () => {
  const[state,setState]=useState(true);
  return (
    <div>
      <Navbar  state={state} setState={setState} />
      {state?<Body />:<Login />}
      <Footer />
    </div>
  )
}

export default App
