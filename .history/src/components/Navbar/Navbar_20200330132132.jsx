import React from "react"
import { Link } from "gatsby"

import { NavContainer } from "./Navbar.styles"

const Navbar = () => {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link to="/">Logo</Link>
        </li>
        <li>English</li>
        <li>Articles</li>
        <li>School</li>
        <li>Login</li>
      </ul>
    </NavContainer>
  )
}

export default Navbar
