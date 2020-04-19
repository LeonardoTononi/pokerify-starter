import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../layout/layout';

const SchoolCharts = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<h1>SchoolCharts</h1>
		</Layout>
	);
};

export default SchoolCharts;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
