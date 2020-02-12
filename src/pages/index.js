import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { usePosts } from '../hooks/use-posts';
import PostPreview from '../components/postPreview';
import Hero from '../components/hero';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Hero />
      <Layout>
        {posts.map(post => (
          <PostPreview key={post.slug} {...post} />
        ))}
        <p>Hello Minnesota!</p>
        <Link to="/about/">Learn about me &rarr;</Link>
      </Layout>
    </>
  );
};
