<template>
  <Layout>
    <template slot="hero">
      <EpisodeHero :episode="$page.episode"/>
    </template>

    <div class="py-6">
      <vue-markdown class="rich-text">{{ $page.episode.longDescription }}</vue-markdown>
    </div>

    <template slot="post-content">
      <TeamHero/>
    </template>
  </Layout>
</template>

<page-query>
  query Episode ($path: String!) {
    episode: episode (path: $path) {
      title
      description
      longDescription
      sharingUrl
      publishedAt
      audioUrl
    }
  }
</page-query>

<script>
import Layout from '~/layouts/Default'
import Breadcrumbs from '~/components/Breadcrumbs'
import PlayerEmbed from '~/components/PlayerEmbed'
import EpisodeHero from '~/components/EpisodeHero'
import VueMarkdown from 'vue-markdown'
import TeamHero from '~/components/TeamHero'

export default {
  components: {
    Layout,
    Breadcrumbs,
    VueMarkdown,
    PlayerEmbed,
    EpisodeHero,
    TeamHero,
  },

  metaInfo() {
    return {
      title: this.$page.episode.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.episode.description,
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.$page.episode.description,
        },
        {
          key: 'og:audio',
          property: 'og:audio',
          content: this.$page.episode.audioUrl,
        },
      ],
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
