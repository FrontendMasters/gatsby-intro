import { graphql, useStaticQuery } from 'gatsby';

export const useInstagram = () => {
  const instaData = useStaticQuery(
    graphql`
      query {
        allInstaNode(limit: 12) {
          posts: nodes {
            id
            caption
            username
            localFile {
              childImageSharp {
                fluid(maxWidth: 120, maxHeight: 120) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `,
  );
  return instaData.allInstaNode;
};
