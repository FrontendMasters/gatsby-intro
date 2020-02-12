import { graphql, useStaticQuery } from 'gatsby';

export const usePosts = () => {
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
  return getPosts.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
  }));
};
