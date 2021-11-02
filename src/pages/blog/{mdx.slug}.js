import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

function BlogPost({ data }) {
  const frontmatter = data.mdx.frontmatter;
  
  return (
    <Layout pageTitle={frontmatter.title}>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      id
      body
    }
  }
`

export default BlogPost;