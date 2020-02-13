import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const HeroImage = styled(BackgroundImage)`
  height: 400px;
  background-position: top 20% center;
  background-size: cover;
  * {
    color: white;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "mo.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <HeroImage fluid={image.sharp.fluid} fadeIn="soft">
      <h1>Front end matsters leanring gatsby</h1>
      <p>
        Hello Missouri! <Link to="about">learn about me</Link>
      </p>
    </HeroImage>
  );
};

export default Hero;
