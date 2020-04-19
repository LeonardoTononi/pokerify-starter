import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../components/Seo/seo"
import { rhythm } from "../utils/typography"

const School = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <h1>School</h1>
    </Layout>
  )
}

export default School

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
