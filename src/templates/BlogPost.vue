<template>
  <Layout>
    <Breadcrumbs :links="breadcrumbLinks"/>

    <div class="py-6">
      <time>{{ $page.post.date | localeDate }}</time>
      <h1 class="my-4">{{ $page.post.title }}</h1>

      <vue-markdown class="rich-text">{{ $page.post.content }}</vue-markdown>
    </div>
  </Layout><!---->
</template>

<page-query>
  query BlogPost ($path: String!) {
    post: blogPost(path: $path) {
      title
      date
      content
    }
  }
</page-query>

<script>
import VueMarkdown from 'vue-markdown'
import Breadcrumbs from '~/components/Breadcrumbs'

export default {
  components: {
    VueMarkdown,
    Breadcrumbs,
  },

  computed: {
    breadcrumbLinks() {
      return [
        {
          name: 'Blog',
          path: '/blog',
        },
      ]
    },
  },
}
</script>

<style scoped>
</style>
