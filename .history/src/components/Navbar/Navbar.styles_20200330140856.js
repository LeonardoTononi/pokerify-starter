import styled from "styled-components"
import { Link } from "gatsby"

export const NavContainer = styled.nav`
  padding: 1rem;
`

export const NavUl = styled.ul`
  display: flex;
  justify-content: space-between;
`

export const NavLi = styled.li`
  padding: 0 1.5rem;
  opacity: 0.75;
`

export const Logo = styled.li`
  margin-right: auto;
  color: #2e2f3e;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  box-shadow: none;
  color: #2e2f3e;
`
