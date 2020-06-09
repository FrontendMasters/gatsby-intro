import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Hero />
      <Layout>
        <h1>Hello there, Frontend Masters!</h1>
        <p>this is a class</p>
        <Link to="/about/">Learn about me &rarr;</Link>

        <h2>Read my Blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};
