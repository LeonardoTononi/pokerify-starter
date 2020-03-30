import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const Index = ({ data, location }) => {
  console.log("LOCATION", location)
  return (
    <Layout location={location} title={siteTitle}>
      <h1>Index</h1>
    </Layout>
  )
}

export default Index
