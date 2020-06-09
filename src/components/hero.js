import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';

const ImageBackground = styled('div')`
  background-image: url('/images/louie-martinez-tokyo.jpg');
  background-position: top 45% center;
  background-size: cover;
  height: 40vh;

  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  return (
    <ImageBackground>
      <TextBox>
        <h1>FEM + Gatsby &hearts;</h1>
        <p>
          Hello Tokyo. <Link to="/about">Learn about me.</Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
