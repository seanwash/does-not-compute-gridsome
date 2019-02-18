<template>
  <Layout>
    <Breadcrumbs/>

    <BlogPostSummary
      v-for="({ node }, index) in $page.posts.edges"
      :key="node.title"
      :post="node"
      :class="{ 'mt-4': index === 0 }"
      class="list-reset my-10"
    />
  </Layout>
</template>

<page-query>
  {
    posts: allBlogPost {
      edges {
        node {
          title
          content
          date
          path
          excerpt
        }
      }
    }
  }
</page-query>

<script>
import Breadcrumbs from '~/components/Breadcrumbs'
import BlogPostSummary from '~/components/BlogPostSummary'

export default {
  components: {
    BlogPostSummary,
    Breadcrumbs,
  },
}
</script>

