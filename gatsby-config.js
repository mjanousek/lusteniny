module.exports = {
  siteMetadata: {
    title: "Lusteniny",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-179555801-5",
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: [],
        sampleRate: 100,
        siteSpeedSampleRate: 10,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo/Logo_Green.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "events",
        path: "./src/content/events",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:400,500,600,700`,
          `Quicksand\:400,500,600,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
