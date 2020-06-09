import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Hello there, Frontend Masters!</h1>
    <p>this is a class</p>
    <Link to="/about/">Learn about me &rarr;</Link>
  </Layout>
);
