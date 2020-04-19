import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../layout/layout';

const SchoolQuizzes = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<h1>SchoolQuizzes</h1>
		</Layout>
	);
};

export default SchoolQuizzes;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
