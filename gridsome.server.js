// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

require('dotenv').config()

const axios = require('axios')

const PODCAST_ID = process.env.API_20_PODCAST_ID
const API_URL = process.env.API_20_URL
const API_KEY = process.env.API_20_KEY

module.exports = function(api) {
  api.loadSource(async actions => {
    const collection = actions.addCollection('Episode')

    console.log('----- Fetching Simplecast Episodes')
    const { data } = await axios.get(
      `${API_URL}/podcasts/${PODCAST_ID}/episodes?limit=1000&offset=0`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    )

    const episodeIds = data.collection.map(episode => episode.id)
    const episodes = []

    for (const id of episodeIds) {
      // https://stackoverflow.com/a/51200702/1549130
      await new Promise(resolve => setTimeout(resolve, 400))

      const { data } = await axios.get(`${API_URL}/episodes/${id}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      })

      episodes.push(data)
    }

    console.log(`----- Fetched ${episodes.length} Simplecast Episodes`)

    for (const item of episodes) {
      collection.addNode({
        ...item,
        id: item.id,
        title: item.title,
        published_at: new Date(item.published_at).toISOString(),
      })
    }
  })
}
