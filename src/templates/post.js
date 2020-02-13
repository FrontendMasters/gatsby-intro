import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ReadLink from '../components/readLink';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Image from 'gatsby-image';
import { css } from '@emotion/core';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`;
const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <Image
        css={css`
          height: 200px;
        `}
        alt={post.title}
        fluid={post.frontmatter.image.childImageSharp.fluid}
      />
      <h1>{post.frontmatter.title}</h1>
      <p>{`posted by', ${post.frontmatter.author}`} </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
  );
};
export default PostTemplate;
