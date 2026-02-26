import React from 'react'
import { Link } from "react-router-dom";
const Body = () => {
  return (
    <div>
      Bofy file

      <Link to="/bottom">Go to footer file </Link> <br />
      <Link  to="/"> Goback</Link>
    </div>
  )
}

export default Body
