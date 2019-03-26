<template>
  <article class="flex flex-col">
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

    <div class="mt-4 flex justify-between items-center">
      <button
        title="Play Episode"
        @click="playEpisode"
        class="flex items-center"
      >
        <play-circle-icon class="custom-class"/>
        <span class="inline-block ml-1">Play</span>
      </button>

      <g-link
        class="no-underline text-black"
        :to="episode.path"
      >
        <strong>View Notes</strong>
      </g-link>
    </div>
  </article>
</template>

<script>
import { mapActions } from 'vuex'
import { PlayCircleIcon } from 'vue-feather-icons'

export default {
  props: {
    episode: {
      type: Object,
      required: true,
    },
  },

  components: {
    PlayCircleIcon,
  },

  methods: {
    ...mapActions(['selectEpisode', 'play']),

    playEpisode() {
      this.selectEpisode(this.episode)
      this.play()
    },
  },
}
</script>

<style></style>
