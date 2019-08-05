<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Frontend Masters: Introduction to Gatsby
</h1>

In this course, learn to build blazing fast apps and websites with React using Gatsby, a static PWA (Progressive Web App) generator. Over 50% of people will abandon a mobile site if it takes more than 3 seconds to load. Unless you’re willing to give up half of your potential customers, performance is no longer optional on the modern web. Fortunately, there are a lot of tools available to help you build screaming fast websites. Unfortunately, there’s a frighteningly large number of performance considerations, and many of them are easy to get wrong.

## What You’ll Learn

- Learn how to leverage free, open source tools including Gatsby, React, and
  GraphQL to build high-performance websites.
- Deliver an excellent experience to your users by providing only critical
  assets on load and prefetching assets for subsequent page loads.
- Implement performance best practices, such as the PRPL pattern, lazy
  loading assets, and more.
- Learn to build and deploy blazing fast websites in the fraction of time.
- Create websites quickly with performance baked in.
- Deploy your sites for free in minutes with Netlify.

## Installation Instructions

For windows users, go through the installation instructions for [cross-env](https://github.com/kentcdodds/cross-env) and add it to your `package.json` develop script.

1. `npm install`
1. `npm run develop`
1. Open http://localhost:8000/

[Course Slides](https://jlengstorf.github.io/presentations/workshop-gatsby-mdx-blog/#/) (hit the right/down arrow keys to progress through the slides)

## Prerequisites

1. Have a text editor installed, i.e. [VSCode](https://code.visualstudio.com/)
2. Have the Gatsby CLI (gatsby-cli) installed globally by running:
   `npm install -g gatsby-cli`

## Course Errata

#### The `gatsby-mdx` plugin was deprecated in favor of `gatsby-plugin-mdx`.

Fixed code: See this [commit to migrate to gatsby-plugin-mdx](https://github.com/FrontendMasters/gatsby-intro/commit/fe9aae6255cc1749205f95e8ca6698476f992a61)

Video: Jason installs this plugin in the [Rendering Components in MDX](https://frontendmasters.com/courses/gatsby/rendering-components-in-mdx/) video at 1 minute, 32 seconds.

View the `step4/mdx-blog` branch for final code for the section.

#### An additional config line needs to be added to configure `gatsby-remark-images`.

Fixed code: See this [commit to configure `gatsby-remark-images'`](https://github.com/FrontendMasters/gatsby-intro/commit/932de28e17f89888d0826e0b6148a9d9452f95cb)

Video: Jason configures remark images in the [Adding Optimized Images to Post](https://frontendmasters.com/courses/gatsby/adding-optimized-images-to-posts/) at 1 minute, 49 seconds.

View the `step6/blog-images` branch for final code for the section.
