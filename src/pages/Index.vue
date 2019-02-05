<template>
  <Layout>
    <podcast-header />

    <ul class="pl-0">
      <li
        class="list-reset my-6"
        v-for="{ node } in $page.episodes.edges"
        :key="node.id"
      >
        <episode-summary :episode="node"/>
      </li>
    </ul>

    <div class="my-6">
      <g-link
        class="btn btn-grey inline-block"
        to="/episodes"
      >View More Episodes
      </g-link>
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
          slug
        }
      }
    }
  }
</page-query>

<script>
import EpisodeSummary from '~/components/EpisodeSummary'
import PodcastHeader from '~/components/PodcastHeader'

export default {
  components: {
    PodcastHeader,
    EpisodeSummary
  }
}
</script>

