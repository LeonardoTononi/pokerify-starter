import React from "react"

const Navbar = () => {
  return (
    <NavContainer>
      <NavUl>
        <li><StyledLink>Learning Path</StyledLink></li>
        <li><StyledLink>Videos</StyledLink></li>
        <li><StyledLink>Charts</StyledLink></li>
        <li><StyledLink>Quizzes</StyledLink></li>
        <li><StyledLink>Forum</StyledLink></li>
      </NavUl>
    </NavContainer>
  )
}

export default Navbar
