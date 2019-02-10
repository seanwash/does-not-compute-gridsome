<template>
  <Layout>
    <Breadcrumbs :links="breadcrumbLinks"/>
    <Container>
      <ul class="pl-0">
        <li
          class="list-reset my-6"
          v-for="{ node } in $page.allEpisode.edges"
          :key="node.id"
        >
          <episode-summary :episode="node"/>
        </li>
      </ul>

      <div class="my-6">
        <Pager :info="$page.allEpisode.pageInfo"/>
      </div>
    </Container>
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

  computed: {
    breadcrumbLinks() {
      return [
        {
          name: 'Episodes',
          path: '/episodes',
        },
      ]
    },
  },
}
</script>

<style>
</style>
