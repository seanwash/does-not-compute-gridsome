<template>
  <Layout>
    <Breadcrumbs :links="breadcrumbLinks"/>

    <div class="py-6">
      <h2>
        Does Not Compute -
        <time
          :datetime="$page.episode.publishedAt"
        >{{ $page.episode.publishedAt | localeDate }}</time>
      </h2>

      <h1 class="visually-hidden">{{ $page.episode.title }}</h1>

      <div class="my-4">
        <PlayerEmbed :episode="$page.episode"/>
      </div>

      <vue-markdown class="rich-text">{{ $page.episode.longDescription }}</vue-markdown>
    </div>
  </Layout>
</template>

<page-query>
  query Episode ($path: String!) {
    episode: episode (path: $path) {
      title
      longDescription
      sharingUrl
      publishedAt
    }
  }
</page-query>

<script>
import Layout from '~/layouts/Default'
import Breadcrumbs from '~/components/Breadcrumbs'
import PlayerEmbed from '~/components/PlayerEmbed'
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    Layout,
    Breadcrumbs,
    VueMarkdown,
    PlayerEmbed,
  },

  metaInfo() {
    return {
      title: this.$page.episode.title,
    }
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
