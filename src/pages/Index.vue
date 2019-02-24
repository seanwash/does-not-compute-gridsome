<template>
  <Layout>
    <PodcastHeader/>

    <ul class="pl-0">
      <li
        class="list-reset my-12"
        v-for="({ node }, index) in $page.episodes.edges"
        :class="{ 'mt-0': index === 0 }"
        :key="node.id"
      >
        <episode-summary :episode="node"/>
      </li>
    </ul>

    <div class="my-6">
      <g-link
        class="btn btn-grey inline-block"
        to="/episodes/2"
      >View More Episodes</g-link>
    </div>
  </Layout>
</template>

<page-query>
query Episode {
  episodes: allEpisode(sortBy: "publishedAt", perPage: 10) {
    edges {
      node {
        id
        title
        description
        publishedAt
        path
        sharingUrl
        audioUrl
      }
    }
  }
}
</page-query>

<script>
import PodcastHeader from '~/components/PodcastHeader'
import EpisodeSummary from '~/components/EpisodeSummary'

export default {
  components: {
    PodcastHeader,
    EpisodeSummary,
  },

  methods: {
    showEmbed(index) {
      return index === 0
    },
  },
}
</script>

