<template>
  <Layout>
    <Breadcrumbs/>

    <div>
      <episode-summary
        v-for="({ node }, index) in $page.allEpisode.edges"
        :key="node.id"
        :episode="node"
        :class="{ 'mt-4': index === 0 }"
        class="list-reset my-10"
      />
    </div>

    <div class="my-6">
      <Pager
        class="pagination"
        :info="$page.allEpisode.pageInfo"
      />
    </div>
  </Layout>
</template>

<page-query>
  query Episodes ($page: Int) {
    allEpisode (perPage: 10, page: $page, sortBy: "publishedAt") @paginate {
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
        }
      }
    }
  }
</page-query>

<script>
import { Pager } from 'gridsome'
import Breadcrumbs from '~/components/Breadcrumbs'
import EpisodeSummary from '~/components/EpisodeSummary'

export default {
  components: {
    Pager,
    EpisodeSummary,
    Breadcrumbs,
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
