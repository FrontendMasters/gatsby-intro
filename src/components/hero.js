import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';

const HeroImage = styled.div`
  background-image: url('./images/mo.jpg');
  height: 100px;
  background-position: top 20% center;
  background-size: cover;
  * {
    color: white;
  }
`;

const Hero = () => {
  return (
    <HeroImage>
      <h1>Front end matsters leanring gatsby</h1>
      <p>
        Hello Missouri! <Link to="about">learn about me</Link>
      </p>
    </HeroImage>
  );
};

export default Hero;
