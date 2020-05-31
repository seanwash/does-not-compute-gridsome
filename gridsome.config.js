// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const GlobalMetaTags = require('./src/data/global-meta-tags.js')

module.exports = {
  siteName: GlobalMetaTags.title,
  siteDescription: GlobalMetaTags.description,
  siteUrl: 'https://dnc.show',
  host: '0.0.0.0',
  port: 8080,
  templates: {
    Episode: '/episodes/:title',
    BlogPost: '/blog/:slug',
  },
  plugins: [
    {
      use: '@perlatsp/gridsome-source-devto',
      options: {
        typeName: 'BlogPost',
        username: 'dnccast',
        apiKey: process.env.DEVTO_API_KEY,
        route: '/blog/:slug',
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        config: './tailwind.js',
      },
    },
    {
      use: 'gridsome-plugin-fathom',
      options: {
        siteId: process.env.FATHOM_ID,
        trackerUrl: process.env.FATHOM_TRACKER_URL,
        host: process.env.FATHOM_HOST,
        debug: true
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/blog'],
        config: {
          '/episodes/*': {
            changefreq: 'weekly',
            priority: 0.5,
          },
        },
      },
    },
  ],
}
