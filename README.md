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

## A Note About Running the Code

We recommend getting the [code running on your computer](#getting-course-code-running-on-your-machine) to build your confidence working with Gatsby. If you get stuck, use the [Course Errata](#course-errata) below to debug, or refer to the the step branches to see what is different between your code and the reference code.

## Course Code Running on CodeSandbox

You can jump into the CodeSandbox for each branch without having to get the code running on your computer. Keep in mind, that if you want to modify the code, you'll need to create a CodeSandbox free account to fork a new sandbox and save it to your CodeSandbox account.

- [Course Starter](https://codesandbox.io/s/github/FrontendMasters/gatsby-intro/tree/master/)
- [Step 0: Pages & Links](https://codesandbox.io/s/github/FrontendMasters/gatsby-intro/tree/step0/pages-and-links) 
- [Step 1: Styles](https://codesandbox.io/s/github/FrontendMasters/gatsby-intro/tree/step1/styles)
- [Step 2: GraphQL & SEO](https://codesandbox.io/s/github/FrontendMasters/gatsby-intro/tree/step2/graphql-and-seo)
- [Step 3: MDX](https://codesandbox.io/s/github/FrontendMasters/gatsby-intro/tree/step3/mdx)
- [Step 4: MDX Blog](https://codesandbox.io/s/github/FrontendMasters/gatsby-intro/tree/step4/mdx-blog)
- [Step 5: Hero Image](https://codesandbox.io/s/github/FrontendMasters/gatsby-intro/tree/step5/hero-image)
- [Step 6: Blog Images](https://codesandbox.io/s/github/FrontendMasters/gatsby-intro/tree/step6/blog-images)
- [Step 7: Source Plugins with Instagram Datasource](https://codesandbox.io/s/github/FrontendMasters/gatsby-intro/tree/step7/source-plugins)
- [Step 8: Analyze Bundle](https://codesandbox.io/s/github/FrontendMasters/gatsby-intro/tree/step8/analyze) (must fork to run npm run analyze)

## Getting Course Code Running on Your Machine

For windows users, go through the installation instructions for [cross-env](https://github.com/kentcdodds/cross-env) and add it to your `package.json` develop script.

1. `npm install`
1. `npm run develop`
1. Open http://localhost:8000/

[Course Slides](https://jlengstorf.github.io/presentations/workshop-gatsby-mdx-blog/#/) (hit the right/down arrow keys to progress through the slides)

Refer to the Course Errata below if you are running into issues.

### Prerequisites

1. Have a text editor installed, i.e. [VSCode](https://code.visualstudio.com/)
2. Have the Gatsby CLI (gatsby-cli) installed globally by running:
   `npm install -g gatsby-cli`
   
## Course Errata

### Video: [Rendering Components in MDX](https://frontendmasters.com/courses/gatsby/rendering-components-in-mdx/) video at 1 minute, 32 seconds where Jason installs the Gatsby MDX plugin.

#### The `gatsby-mdx` plugin was deprecated in favor of `gatsby-plugin-mdx`.

Fixed code: See this [commit to migrate to gatsby-plugin-mdx](https://github.com/FrontendMasters/gatsby-intro/commit/fe9aae6255cc1749205f95e8ca6698476f992a61)

`npm install gatsby-plugin-mdx` instead of `gatsby-mdx`

View the `step4/mdx-blog` branch for final code for the section.

### Video: [Adding Optimized Images to Post](https://frontendmasters.com/courses/gatsby/adding-optimized-images-to-posts/) at 1 minute, 49 seconds where Jason configures remark images.

#### An additional config line needs to be added to configure `gatsby-remark-images`.

Fixed code: See this [commit to configure `gatsby-remark-images'`](https://github.com/FrontendMasters/gatsby-intro/commit/932de28e17f89888d0826e0b6148a9d9452f95cb)

```javascript
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: ['gatsby-remark-images'],
        plugins: ['gatsby-remark-images'],
      },
    },
```

View the `step6/blog-images` branch for final code for the section.

### Video: [Getting Post by Slug](https://frontendmasters.com/courses/gatsby/getting-post-data-by-slug/) at 4 minutes, 55 seconds where Jason gets the post body.

#### gatsby-plugin-mdx no longer requires `body` to be nested in `code` in the query

in ```post.js``` the query should be

```javascript
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`
```

Instead of 

```javascript
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      code {
        body
      }
    }
  }
```

More details in [issue #27](https://github.com/FrontendMasters/gatsby-intro/issues/27)
