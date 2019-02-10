<template>
  <Layout :title="$page.episode.title">
    <Breadcrumbs :links="breadcrumbLinks"/>

    <Container class="py-6">
      <h1 class="mb-4">{{ $page.episode.title }}</h1>

      <vue-markdown>{{ $page.episode.longDescription }}</vue-markdown>
    </Container>
  </Layout>
</template>

<page-query>
query Episode ($path: String!) {
  episode: episode (path: $path) {
    title
    longDescription
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
        {
          name: this.$page.episode.title,
          path: this.$route.path,
        },
      ]
    },
  },
}
</script>
