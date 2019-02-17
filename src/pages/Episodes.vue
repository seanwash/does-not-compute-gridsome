<template>
  <Layout>
    <Breadcrumbs :links="breadcrumbLinks"/>

    <ul class="pl-0">
      <li
        v-for="({ node }, index) in $page.allEpisode.edges"
        :key="node.id"
        :class="{ 'mt-4': index === 0 }"
        class="list-reset my-10"
      >
        <episode-summary :episode="node"/>
      </li>
    </ul>

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

  computed: {
    breadcrumbLinks() {
      return []
    },
  },
}
</script>

<style>
</style>
