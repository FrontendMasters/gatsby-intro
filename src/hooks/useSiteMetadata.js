import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const seoData = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  );
  return seoData.site.siteMetadata;
};
