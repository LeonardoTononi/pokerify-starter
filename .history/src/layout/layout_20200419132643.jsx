import React from 'react';
import { Link } from 'gatsby';
import { rhythm, scale } from '../utils/typography';
import { createGlobalStyle } from 'styled-components';

import NavbarSchool from '../components/School-master/NavbarSchool/Navbar-school';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,600,600i,700i,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    color: #2E2F3E;
  }
  ul {
      list-style-type: none;
  }
`;

const Layout = ({ location, title, children }) => {
	const rootPath = `${__PATH_PREFIX__}/`;
	let header;
	console.log('CACCA');

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
		<React.Fragment>
			<GlobalStyle />
			<Navbar />
			<NavbarSchool />
			<main>{children}</main>
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
