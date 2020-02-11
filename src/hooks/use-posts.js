import { graphql, useStaticQuery } from 'gatsby';

export const getPosts = () => {
  const getPosts = useStaticQuery(
    graphql`
      query {
        allMdx {
          nodes {
            frontmatter {
              title
              slug
              author
            }
            excerpt
          }
        }
      }
    `,
  );
  return getPosts.allMdx;
};
