<template>
  <article>
    <header>
      <time :datetime="episode.publishedAt">{{ episode.publishedAt }}</time>
      <h1>{{ episode.title }}</h1>
    </header>

    <p>{{ episode.description }}</p>

    <g-link class="btn" :to="permalink">View show notes</g-link>
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
    permalink() {
      return `/episodes/${this.episode.slug}`
    }
  },
}
</script>

<style>
</style>
