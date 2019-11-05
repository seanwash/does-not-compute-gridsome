<template>
  <article>
    <header>
      <time :datetime="post.date">{{ post.published_timestamp | localeDate }}</time>
      <h1 class="text-3xl my-2">
        <a
          class="no-underline text-black"
          :href="post.url"
        >{{ post.title }}</a>
      </h1>
    </header>

    <p>{{ post.description }}</p>

    <a
      class="btn btn-grey inline-block mt-4"
      :href="post.url"
    >Read at dev.to</a>
  </article>
</template>

<script>
export default {
  name: 'BlogPostSummary',

  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
