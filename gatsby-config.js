module.exports = {
  siteMetadata: {
    title: "Lusteniny",
    siteUrl: "https://lusteniny.eu",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
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
        icon: "src/images/logo/Logo.png",
        name: `Luštěniny`,
        short_name: `Luštěniny`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
          `Quicksand\:400,500,600,700`,
          `Inter\:400,500,600,700`,
        ],
        display: "swap",
      },
    },
  ],
  flags: {
    DEV_SSR: false,
  },
};
