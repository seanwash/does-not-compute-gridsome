<template>
  <article>
    <header>
      <time :datetime="episode.publishedAt">{{ publishDateTime }}</time>
      <h1 class="text-3xl my-2">
        <g-link class="no-underline text-black" :to="permalink">{{ episode.title }}</g-link>
      </h1>
    </header>

    <p>{{ episode.description }}</p>

    <g-link
      class="btn btn-grey inline-block mt-4"
      :to="permalink"
    >View show notes</g-link>
  </article>
</template>

<script>
export default {
  props: {
    episode: {
      type: Object,
      required: true,
    },
  },

  computed: {
    publishDateTime() {
      let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return new Date(this.episode.publishedAt).toLocaleDateString(
        'en-US',
        options,
      )
    },

    permalink() {
      return `/episodes/${this.episode.slug}`
    },
  },
}
</script>

<style>
</style>
