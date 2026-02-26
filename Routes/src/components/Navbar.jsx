import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <h1>Navbar file</h1>
      <Link to="/body"> go to body file</Link>
    </div>
  )
}

export default Navbar
