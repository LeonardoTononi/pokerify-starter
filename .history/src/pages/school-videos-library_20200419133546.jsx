import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../layout/layout';

const SchoolVideoLibrary = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<h1>SchoolVideoLibrary</h1>
		</Layout>
	);
};

export default SchoolVideoLibrary;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
