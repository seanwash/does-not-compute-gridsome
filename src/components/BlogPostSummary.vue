<template>
  <article>
    <header>
      <time :datetime="post.date">{{ post.date | localeDate }}</time>
      <h1 class="text-3xl my-2">
        <g-link class="no-underline text-black" :to="post.path">{{ post.title }}</g-link>
      </h1>
    </header>

    <p>{{ post.excerpt }}</p>

    <g-link
      class="btn btn-grey inline-block mt-4"
      :to="post.path"
    >Read more</g-link>
  </article>
</template>

<script>
export default {
  name: 'BlogPostSummary',

  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
