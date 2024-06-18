module.exports = {
  siteMetadata: {
    title: `Студия дизайна интерьера и архитектуры Александра Игнатьева`,
    description: `Разрабатываем индивидуальный дизайн интерьера ✦ более 15 лет опыта ✦ портфолио более 100 проектов ✦ под ключ.`,
    author: `@gatsbyjs`,
    siteUrl: `https://i-project.by/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 83,
          breakpoints: [500, 1920, 2500],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,#E94A34
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Open Sans",
              variants: ["300", "400", "500", "600", "700"],
              subsets: ['cyrillic'],
              fontDisplay: 'swap'
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PQ5JLW7",
        includeInDevelopment: false,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -50
      }
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: 71004781,
        webvisor: true,
        trackHash: true,
        afterBody: true,
        defer: false,
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js'],
        verbose: true
      }
    }
  ],
}
