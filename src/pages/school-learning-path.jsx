import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../layout/layout';

const SchoolLearningPath = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<h1>SchoolLearningPath</h1>
		</Layout>
	);
};

export default SchoolLearningPath;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
