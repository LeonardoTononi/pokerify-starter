import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../layout/layout';

const Login = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;
	return (
		<Layout location={location} title={siteTitle}>
			<h1>Login</h1>
		</Layout>
	);
};

export default Login;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
