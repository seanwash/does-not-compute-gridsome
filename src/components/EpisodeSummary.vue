<template>
  <article class="flex">
    <g-link
      class="flex flex-col no-underline text-black"
      :to="episode.path"
    >
      <header>
        <time
          :datetime="episode.publishedAt"
        >{{ episode.publishedAt | localeDate }}</time>
        <h1 class="text-2xl leading-tight my-2">
          <g-link
            class="no-underline text-black"
            :to="episode.path"
          >{{ episode.title }}</g-link>
        </h1>
      </header>

      <p class="flex-grow">{{ episode.description }}</p>

      <div class="mt-4">
        <strong>Listen &amp; Notes</strong>
      </div>
    </g-link>
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
