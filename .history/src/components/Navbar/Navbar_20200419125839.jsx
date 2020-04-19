import React from "react"

import { NavContainer, NavUl, NavLi, Logo, StyledLink } from "./Navbar.styles"

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
        <NavLi to="/school">School</NavLi>
        <NavLi to="/login">Login</NavLi>
      </NavUl>
    </NavContainer>
  )
}

export default Navbar
