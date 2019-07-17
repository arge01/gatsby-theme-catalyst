# \[WIP\] Gatsby Theme Catalyst Core

**Smarter, Faster, Easier**

**Currently a work in progress - please be aware that there are rapid breaking changes at this point in the development. Not currerntly recommended for use.**

The Catalyst series of themes and starters for [GatsbyJS](https://www.gatsbyjs.org/) were designed to provide an opinoinated set of progressive themes and starters that can be used to accelerate web development. The guiding philosophy is to build websites smarter, faster, and easier.

## Catalyst Themes and Starters

* [Gatsby-Theme-Catalyst-Core](https://github.com/ehowey/gatsby-theme-catalyst-core)
  * [Gatsby-Starter-Catalyst-Basic](https://github.com/ehowey/gatsby-starter-catalyst-basic) - implements the core theme in a starter site to make installation and customization easier.
* [Gatsby-Theme-Catalyst-Onepage](https://github.com/ehowey/gatsby-theme-catalyst-onepage)
  * [Gatsby-Starter-Catalyst-Onepage](https://github.com/ehowey/gatsby-starter-catalyst-onepage) - implements the onepage theme in a starter site to make installation and customization easier.

## Installation and Use

### Quick Start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying a catalyst based starter, the themes will be included by deafult in the dependencies.

    ```sh
    # create a new Gatsby site using the a catalyst starter site
    gatsby new my-catalyst-starter-basic https://github.com/ehowey/gatsby-starter-catalyst-basic
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-catalyst-starter-basic/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-catalyst-starter` directory in your code editor of choice and edit `src/pages/index.mdx`. Save your changes and the browser will update in real time!
    
You can read more about [using starters in the official documentation.](https://www.gatsbyjs.org/docs/starters/)

### Custom Starter Development Using Catalyst Themes and Yarn Workspaces

For more advanced users who want to dig into the guts of the themes and create their own starters the easiest way to do this is via [Yarn workspaces](https://www.gatsbyjs.org/blog/2019-05-22-setting-up-yarn-workspaces-for-theme-development/). You will also want to read through the [themes documentation.](https://www.gatsbyjs.org/docs/themes/)  

## Philosophy - Less is More

**Simple Base Theme**

`gatsby-theme-catalyst-core` was designed and built to be as simple and unstyled as possible. Think of this as the foundation of a home.

**Building 'blocks' to extend the base theme**

Using a series of progressively more styled and complex child-themes to add on to the core catalyst theme. Think of these as rooms that get added on to the house. These child-themes are focused on extending function and as design-agnostic as possible.

**Complementary Starter Sites**

The starter sites provide a "quick start" for site development including the themes as dependencies. You pick your house and rooms now it is up to you to add in the paint, furniture, and finishing touches.  This is where most, or all, of the styling and design should be done.  These starter sites will give some basic styling using shadow components however the goal is for these starter sites to tie together the Catalyst themes in a usable way giving you a "blank slate" on which you can build the final site.

## Component Shadowing

[Read about component shadowing in detail.](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/)

Gatsby themes, and starter sites that use theme, allow for component shadowing.  This means that components from the original core theme can be replaced or modified in the site without changing the core files! This gives you amazing power as an end-user to create fully custom projects without having to worry about affecting the core files. 

## Theme-UI and Emotion

[Read the theme-ui docs](https://www.theme-ui.com)

Theme-UI is used throughout as this is the suggested best practice when building Gatsby themes. The power of Theme-UI lies in allowing easy changes to design tokens through the theme context. This allows for design tokens to be set and used across the themes and starter sites by way of component shadowing the base theme. This file is always located in the following location:

    .
    ├── src
      ├── gatsby-plugin-theme-ui
        ├── index.js
          

## MDX Files

[Read the MDX docs](https://mdxjs.com/)

MDX files offer a number of improvements and simplifications for GatsbyJS site development and in my opinion are a no-brainer in place of standard markdown files. I also appreciate that the fallback can be to simply write normal markdown or javascript files, having access to MDX in your website development workflow is a progressive enhancement and does not break any backwards compatability with normal markdown and javascript files.

## Next Steps

This is a passion project for me.  I would love any additional feedback, suggestions and pull requests.  I can be contacted via email at: <eric@erichowey.dev>
