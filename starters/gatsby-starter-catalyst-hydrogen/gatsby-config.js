module.exports = {
  siteMetadata: {
    title: `Catalyst Hydrogen`,
    description: `Speed up your Gatsby development workflow.`,
    keywords: [`gatsby`, `theme`, `react`, `blog`],
    author: `Eric Howey`,
    siteUrl: `https://gatsby-starter-catalyst-hydrogen.netlify.com`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `Projects`,
        link: `/projects`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Bio`,
        link: `/bio`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Contact`,
        link: `/contact`,
        type: `internal`, //internal or anchor
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `eric@erichowey.dev`,
        location: `footer`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        link: `https://www.github.com/ehowey`,
        location: `all`, //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        link: `https://www.twitter.com/erchwy`,
        location: `header`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        //Default options are:
        // contentPath: `content/pages`,
        // assetPath: `content/assets`,
        // displaySiteLogo: true,
        // displaySiteTitle: true,
        // displaySiteLogoMobile: true,
        // displaySiteTitleMobile: true,
        // invertLogo: false,
        // useStickyHeader: false,
        // useSocialLinks: true,
        // useColorMode: true,
        // mobileMenuBreakpoint: `768px`,
        // isHeaderSideLeft: true, // Only effects gatsby-catalyst-header-top
        //footerContentLocation: "left", // "left", "right", "center"
        useStickyHeader: true,
        footerContentLocation: "center", // "left", "right", "center"
        displaySiteLogoMobile: false,
      },
    },
    {
      resolve: `gatsby-theme-catalyst-blog`,
      options: {
        // Default options are:
        // basePath: `/blog`,
        // contentPath: `content/posts`,
        // assetPath: `content/assets`,
        // excerptLength: `140`,
        basePath: `/`,
        excerptLength: `280`,
      },
    },
    `gatsby-theme-catalyst-header-side`,
    `gatsby-theme-catalyst-footer`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst-basic`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `content/assets/catalyst-site-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}