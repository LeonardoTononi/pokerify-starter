import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import { createGlobalStyle } from "styled-components"

import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    color: #2E2F3E;
  }

  ul {
      list-style-type: none;
  }
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  /* if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } */
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
