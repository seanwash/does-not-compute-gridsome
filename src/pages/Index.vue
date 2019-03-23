<template>
  <Layout>
    <template slot="hero">
      <PodcastHeader :heading="meta.heading"/>
    </template>

    <ul class="pl-0 pt-12">
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
        class="btn btn-grey block w-full text-center"
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

  data() {
    return {
      meta: {
        heading:
          'A weekly podcast about the lives and workflows of modern web app developers. New episodes every Tuesday.',
      },
    }
  },

  metaInfo() {
    return {
      title: 'Home',
      meta: [
        {
          key: 'og:title',
          property: 'og:title',
          content: 'Does Not Compute Podcast',
        },
        { key: 'description', name: 'description', content: this.meta.heading },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.meta.heading,
        },
      ],
    }
  },

  methods: {
    showEmbed(index) {
      return index === 0
    },
  },
}
</script>

