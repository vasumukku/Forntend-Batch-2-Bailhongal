import React from 'react'
import { useState } from 'react'
const App = () => {
  const[state,setState]=useState(false) 
  return (
    <div>
      <button onClick={()=>{setState(!state)}}>{state?"Login":"logout"}</button> 


      {state?<div>      
        <h1>Login form </h1>
        <h1>Login form </h1>
        <h1>Login form </h1>
      </div>: <h1>cards page</h1>}


    </div>
  )
}

export default App
