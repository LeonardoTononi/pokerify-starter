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
	return (
		<React.Fragment>
			<GlobalStyle />
			<Navbar />
			{location.pathname.includes('school') ? <NavbarSchool /> : null}
			<main>{children}</main>
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
