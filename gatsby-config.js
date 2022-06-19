module.exports = {
  siteMetadata: {
    title: 'Lusteniny',
    siteUrl: 'https://lusteniny.eu',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-htaccess',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://lusteniny.eu',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-75XS8VPMJN'],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/content/images/Logo.png',
        name: `Luštěniny`,
        short_name: `Luštěniny`,
        start_url: `/`,
        background_color: `#068A63`,
        theme_color: `#068A63`,
        display: `standalone`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'lusteniny.eu',
        sitemap: 'https://lusteniny.cz/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/content/',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Quicksand\:400,500,600,700`],
        display: 'swap',
      },
    },
  ],
};
