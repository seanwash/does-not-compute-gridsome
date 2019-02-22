<template>
  <article>
    <header>
      <time
        :datetime="episode.publishedAt"
      >{{ episode.publishedAt | localeDate }}</time>
      <h1 class="text-3xl my-2">
        <g-link
          class="no-underline text-black"
          :to="episode.path"
        >{{ episode.title }}</g-link>
      </h1>
    </header>

    <p>{{ episode.description }}</p>

    <g-link
      class="btn btn-grey inline-block mt-4"
      :to="episode.path"
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
}
</script>

<style>
</style>
