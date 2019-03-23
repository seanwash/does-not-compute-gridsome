<template>
  <Layout>
    <template slot="hero">
      <EpisodeHero
        v-for="({ node }, index) in $page.latestEpisode.edges"
        :key="node.id"
        :episode="node"
      />
    </template>

    <ul class="flex flex-wrap -mx-2 pl-0 pt-10">
      <li
        v-for="({ node }, index) in $page.episodes.edges"
        class="flex w-full md:w-1/2 lg:w-1/3 p-2 list-reset"
      >
        <EpisodeSummary
          :key="node.id"
          :episode="node"
          class="p-4 shadow rounded bg-grey-lightest"
        />
      </li>
    </ul>

    <div class="py-12">
      <Pager
        class="pagination text-center"
        :info="$page.episodes.pageInfo"
      />
    </div>

    <template slot="post-content">
      <div class="py-8 bg-black">
        <Container class="text-center">
          <h3 class="text-white text-3xl mb-4">New episodes every Tuesday.</h3>
          <PodcastPlayerCollection variant="light"/>
        </Container>
      </div>
    </template>
  </Layout>
</template>

<page-query>
  query Episodes ($page: Int) {
    latestEpisode: allEpisode(perPage: 1, page: 1, sortBy: "publishedAt") {
      edges {
        node {
          id
          title
          path
          description
          publishedAt
          slug
          audioUrl
        }
      }
    }

    episodes: allEpisode(skip: 1, perPage: 12, page: $page, sortBy: "publishedAt") @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          path
          description
          publishedAt
          slug
          audioUrl
        }
      }
    }
  }
</page-query>

<script>
import { Pager } from 'gridsome'
import Breadcrumbs from '~/components/Breadcrumbs'
import EpisodeHero from '~/components/EpisodeHero'
import EpisodeSummary from '~/components/EpisodeSummary'
import PodcastPlayerCollection from '~/components/PodcastPlayerCollection'

export default {
  components: {
    Pager,
    EpisodeHero,
    EpisodeSummary,
    Breadcrumbs,
    PodcastPlayerCollection,
  },

  metaInfo() {
    return {
      title: 'Episodes',
    }
  },
}
</script>

<style>
</style>
