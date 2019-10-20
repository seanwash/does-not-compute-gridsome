<template>
  <Layout>
    <template slot="hero">
      <EpisodeHero
        :episode="$page.episode"
        :is-permalink="true"
      />
    </template>

    <div class="py-6">
      <vue-markdown class="rich-text">{{ $page.episode.long_description }}</vue-markdown>
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
      long_description
      sharing_url
      published_at
      audio_url
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
          content: this.$page.episode.audio_url,
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
