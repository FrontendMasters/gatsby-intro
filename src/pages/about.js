import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About me</h1>
    <p>this is my website</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);
