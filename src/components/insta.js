import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import { useInstagram } from '../hooks/useInstagram';

const Insta = () => {
  const { posts } = useInstagram();
  return (
    <div>
      <h2>Instagram posts form</h2>
      {posts.map(post => {
        return (
          <div key={post.caption}>
            <h2>{post.caption}</h2>
            <Image
              css={css`
                width: 120px;
                height: 120px;
              `}
              fluid={post.localFile.childImageSharp.fluid}
            />
          </div>
        );
      })}
      <h2> see more on instagdram! </h2>
    </div>
  );
};

export default Insta;
