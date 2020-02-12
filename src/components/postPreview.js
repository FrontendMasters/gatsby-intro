import React from 'react';
import { css } from '@emotion/core';
import ReadLink from './readLink';

const PostPreview = ({ title, author, slug, excerpt }) => {
  return (
    <article
      css={css`
        border-bottom: 1px solid #ddd;
        margin-top: 0.75rem;
        padding-bottom: 1rem;

        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <h3>{title}</h3>
      <p>{author}</p>
      <ReadLink to={slug}>read this post &rarr;</ReadLink>
    </article>
  );
};

export default PostPreview;
