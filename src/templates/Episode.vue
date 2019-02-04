<template>
  <Layout :title="$page.episode.title">
    <div v-html="$page.episode.description"/>
  </Layout>
</template>

<page-query>
query Episode ($path: String!) {
  episode: episode (path: $path) {
    title
    description
  }
}
</page-query>

<script>
import Layout from '~/layouts/Default.vue'

export default {
  components: {
    Layout
  },

  metaInfo () {
    return {
      title: this.$page.episode.title
    }
  }
}
</script>
