import React from "react"
import { Link } from "gatsby"

import { NavContainer, Logo } from "./Navbar.styles"

const Navbar = () => {
  return (
    <NavContainer>
      <ul>
        <Logo>
          <Link to="/">Logo</Link>
        </Logo>
        <li>English</li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>School</li>
        <li>Login</li>
      </ul>
    </NavContainer>
  )
}

export default Navbar
