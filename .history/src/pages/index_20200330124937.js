import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const index = ({ data, location }) => {

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Index</h1>
    </Layout>
  )
}

export default Index


