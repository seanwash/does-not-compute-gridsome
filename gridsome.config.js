// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Does Not Compute',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        config: './tailwind.js'
      }
    },
    {
      use: 'gridsome-plugin-purgecss',
      // default options, the following will be included if you don't provide
      // anything
      options: {
        content: [
          './src/**/*.vue',
          './src/**/*.js',
          './src/**/*.jsx',
          './src/**/*.md'
        ],
        extensions: ['vue', 'js', 'jsx', 'md']
      }
    }
  ]
}
