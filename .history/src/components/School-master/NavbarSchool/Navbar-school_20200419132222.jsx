import React from 'react';

import { NavContainer, NavUl, StyledLink } from './Navbar-school.styles';

const NavbarSchool = () => {
	return (
		<NavContainer>
			<NavUl>
				<li>
					<StyledLink>Learning Path</StyledLink>
				</li>
				<li>
					<StyledLink>Videos</StyledLink>
				</li>
				<li>
					<StyledLink to='/school-charts'>Charts</StyledLink>
				</li>
				<li>
					<StyledLink>Quizzes</StyledLink>
				</li>
				<li>
					<StyledLink>Forum</StyledLink>
				</li>
			</NavUl>
		</NavContainer>
	);
};

export default NavbarSchool;
