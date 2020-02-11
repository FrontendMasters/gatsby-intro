import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { getPosts } from '../hooks/use-posts';

export default () => {
  const x = getPosts();
  console.log(x);
  return (
    <Layout>
      <h1>Home</h1>
      <p>Hello Minnesota!</p>
      <Link to="/about/">Learn about me &rarr;</Link>
    </Layout>
  );
};
