import { Link, graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout/layout";

function BlogList({ data }) {
  return ( 
    <Layout pageTitle="All Posts">
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <Link to={`/blog/${node.slug}`}><li>{node.frontmatter.title}</li></Link>
          </article>
        ))}
      </ul>
    </Layout>
   );
}

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        slug
      }
    }
  }
`

export default BlogList;