import React from 'react';

import { NavContainer, NavUl, StyledLink } from './Navbar-school.styles';

const NavbarSchool = () => {
	return (
		<NavContainer>
			<NavUl>
				<li>
					<StyledLink to='/school-learning-path'>Learning Path</StyledLink>
				</li>
				<li>
					<StyledLink to='/school-videos-library'>Videos</StyledLink>
				</li>
				<li>
					<StyledLink to='/school-charts'>Charts</StyledLink>
				</li>
				<li>
					<StyledLink to='/school-quizzes'>Quizzes</StyledLink>
				</li>
				<li>
					<StyledLink to='/school-forum'>Forum</StyledLink>
				</li>
			</NavUl>
		</NavContainer>
	);
};

export default NavbarSchool;
