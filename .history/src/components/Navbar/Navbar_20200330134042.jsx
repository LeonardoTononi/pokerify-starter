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
          <NavLink to="/articles">Articles</NavLink>
        </NavLi>
        <NavLi>School</NavLi>
        <NavLi>Login</NavLi>
      </NavUl>
    </NavContainer>
  )
}

export default Navbar
