import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useInstagram from '../hooks/use-instagram';

const Insta = () => {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];

  return (
    <>
      <h2>Insta posts from @{username}</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 1rem -0.5rem;
          padding: 0.5rem 0;
        `}
      >
        {instaPhotos.map(photo => (
          <a
            href={`https://instagram.com/p/${photo.id}/`}
            css={css`
              box-shadow: 0;
              display: block;
              margin: 0.5rem;
              max-width: calc(33% - 1rem);
              width: 120px;
              transition: 200ms box-shadow linear;

              :focus,
              :hover {
                box-shadow: 0 2px 14px #22222244;
                z-index: 10;
              }
            `}
          >
            <Image
              key={photo.id}
              alt={photo.caption}
              css={css`
                width: 100%;
                * {
                  margin-top: 0;
                }
              `}
              fluid={photo.fluid}
            />
          </a>
        ))}
      </div>
      <a href="https://www.instagram.com/travis_saw_this/" target="_blank">
        See more on Instagram
      </a>
    </>
  );
};

export default Insta;
