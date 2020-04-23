import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../layout/layout';
import SEO from '../components/Seo/seo';
import { rhythm } from '../utils/typography';

const Index = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<h1>Index</h1>
		</Layout>
	);
};

export default Index;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allStrapiArticle {
			edges {
				node {
					strapiId
					title
					category {
						name
					}
					image {
						publicURL
					}
				}
			}
		}
	}
`;
