<template>
  <Layout>
    <template slot="hero">
      <PodcastHeader :heading="meta.heading"/>
    </template>

    <ul class="flex flex-wrap -mx-2 pl-0 pt-10">
      <li
        v-for="({ node }, index) in $page.episodes.edges"
        class="flex w-full md:w-1/2 lg:w-1/3 p-2 list-reset"
      >
        <EpisodeSummary
          :key="node.id"
          :episode="node"
          class="p-4 rounded bg-grey-light"
        />
      </li>
    </ul>

    <div class="mt-6 mb-12">
      <g-link
        class="btn btn-adaptive-dark block w-full text-center"
        to="/episodes/2"
      >View More Episodes</g-link>
    </div>

    <template slot="post-content">
      <TeamHero/>
    </template>
  </Layout>
</template>

<page-query>
query Episode {
  episodes: allEpisode(filter: { published_at: { lte: "now" }}, sortBy: "published_at", perPage: 12) {
    edges {
      node {
        id
        title
        description
        published_at
        path
        sharing_url
        audio_url
      }
    }
  }
}
</page-query>

<script>
import PodcastHeader from '~/components/PodcastHeader'
import EpisodeSummary from '~/components/EpisodeSummary'
import TeamHero from '~/components/TeamHero'

export default {
  components: {
    PodcastHeader,
    EpisodeSummary,
    TeamHero,
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
