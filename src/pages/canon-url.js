import React from "react"
import { graphql } from "gatsby"
import queryString from 'query-string';

const Page = ({ location, data }) => {
  const canonicalUrl = data.site.siteMetadata.siteURL + location.pathname
  console.log(queryString.parse(location.search));
  return <div>The URL of this page is {canonicalUrl}</div>
}
export default Page
export const query = graphql`
  query PageQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`