import React from "react"
import { Link } from "gatsby"

import { NavContainer, NavUl, NavLi, Logo } from "./Navbar.styles"

const Navbar = () => {
  return (
    <NavContainer>
      <NavUl>
        <Logo>
          <Link to="/">Logo</Link>
        </Logo>
        <NavLi>EngNavLish</NavLi>
        <NavLi>
          <Link to="/articles">Articles</Link>
        </NavLi>
        <NavLi>School</NavLi>
        <NavLi>Login</NavLi>
      </NavUl>
    </NavContainer>
  )
}

export default Navbar
