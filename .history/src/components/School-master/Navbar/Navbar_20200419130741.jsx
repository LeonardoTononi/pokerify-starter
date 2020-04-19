import React from "react"

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
        <NavLi>
          <StyledLink to="/school">School</StyledLink></NavLi>
        <NavLi><StyledLink to="/login">Login</StyledLink></NavLi>
      </NavUl>
    </NavContainer>
  )
}

export default Navbar
