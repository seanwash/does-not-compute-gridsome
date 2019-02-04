// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// TODO: Remove this once Gridsome 0.5 is released with built in .env support
require('dotenv').config()

const axios = require('axios')

const PODCAST_ID = process.env.PODCAST_ID
const API_URL = process.env.API_URL
const API_KEY = process.env.API_KEY

module.exports = function (api) {
  api.loadSource(async store => {
    const { data } = await axios.get(`${API_URL}/podcasts/${PODCAST_ID}/episodes.json?api_key=${API_KEY}`)

    const contentType = store.addContentType({
      typeName: 'Episode',
      route: '/episodes/:slug'
    })

    for (const item of data) {
      contentType.addNode({
        id: item.id,
        title: item.title,
        fields: {...item}
      })
    }
  })
}
