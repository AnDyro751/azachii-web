require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Azachii`,
    description: "Agencia digital",
    author: `AnDyroHM`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    // {
    //   resolve: `gatsby-plugin-remote-images`,
    //   options: {
    //     nodeType: "myNodes",
    //     imagePath: "imageUrl",
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "2470687473147176",
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Heebo`,
          },
          {
            family: `Playfair Display`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#3a4da7`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-mixpanel",
      options: {
        apiToken: "37e1f139e0e83b2a589375cdfe7eab0e",
        enableOnDevMode: true, // required
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: true,
          database: false,
          firestore: true,
          storage: false,
          messaging: false,
          functions: false,
          remoteConfig: true,
          config: true
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}


