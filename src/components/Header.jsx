import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <ul>
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/movies'>Movies</Link> </li>
          <li> <Link to='/passwordgenerator'>Password Generator</Link> </li>
          <li> <Link to='/passwordgenerator1'>Password Generator 1</Link> </li>
          <li> <Link to='/todo'>Todo</Link> </li>
          <li> <Link to='/parent'>Parent</Link> </li>
        </ul>
      </nav>
    </>
  )
}

export default Header