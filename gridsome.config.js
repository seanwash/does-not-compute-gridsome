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
    BlogPost: '/blog/:year/:month/:day/:title',
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: 'blog/**/*.md',
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        config: './tailwind.js',
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GA_ID,
      },
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
