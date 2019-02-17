<template>
  <Layout>
    <Breadcrumbs :links="breadcrumbLinks"/>

    <div class="py-6">
      <h2>
        Does Not Compute -
        <time :datetime="$page.episode.publishedAt">{{ publishDateTime }}</time>
      </h2>

      <h1 class="visually-hidden">{{ $page.episode.title }}</h1>

      <div class="my-4">
        <iframe
          frameborder="0"
          height="200px"
          scrolling="no"
          seamless
          :src="embedUrl"
          width="100%"
        ></iframe>
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
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    Layout,
    Breadcrumbs,
    VueMarkdown,
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

    publishDateTime() {
      let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return new Date(this.$page.episode.publishedAt).toLocaleDateString(
        'en-US',
        options,
      )
    },

    embedUrl() {
      // Simplecast doesn't expose the actual podcast ID anywhere that we can use directly for generating an embed link,
      // so we have to extract that ID ourselves from the `sharingUrl` and manually build an embed URL.
      let url = this.$page.episode.sharingUrl
      let index = url.lastIndexOf('/')
      let embedId = url.substr(index)

      return `https://embed.simplecast.com/${embedId}?color=3d3d3d`
    },
  },
}
</script>
