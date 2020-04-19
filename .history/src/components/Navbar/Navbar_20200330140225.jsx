import React from "react"

import { NavContainer, NavUl, NavLi, Logo } from "./Navbar.styles"

const Navbar = () => {
  return (
    <NavContainer>
      <NavUl>
        <Logo>
          <Link to="/">Logo</Link>
        </Logo>
        <NavLi>English</NavLi>
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
