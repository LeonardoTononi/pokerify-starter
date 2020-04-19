import React from "react"

import { NavContainer, NavUl, NavLi, Logo } from "./Navbar.styles"

const Navbar = () => {
  return (
    <NavContainer>
      <NavUl>
        <Logo>
          <StyledLink to="/">Logo</StyledLink>
        </Logo>
        <NavLi>English</NavLi>
        <NavLi>
          <StyledLink to="/articles">Articles</StyledLink>
        </NavLi>
        <NavLi>School</NavLi>
        <NavLi>Login</NavLi>
      </NavUl>
    </NavContainer>
  )
}

export default Navbar
