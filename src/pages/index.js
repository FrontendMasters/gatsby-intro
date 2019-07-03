import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layouts';

export default () => (
	<Layout>
		<h1>Hi Frontend Masters! Dis Mark</h1>
		<p>Hello Michigan</p>
		<Link to="/about/">Learn More About Me &rarr;</Link>
	</Layout>
);
