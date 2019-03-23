<template>
  <article class="py-12 bg-grey-light">
    <Container>
      <header>
        <time
          :datetime="episode.publishedAt"
        >{{ episode.publishedAt | localeDate }}</time>
        <h1 class="text-5xl leading-none my-2">
          <g-link
            class="no-underline text-black"
            :to="episode.path"
          >{{ episode.title }}</g-link>
        </h1>
      </header>

      <p
        class="text-2xl leading-tight mt-4 mb-6 max-w-lg"
      >{{ episode.description }}</p>

      <div class="bg-white rounded shadow p-4">
        <PlyrAudio :audio-url="episode.audioUrl"/>

        <div class="mt-4 flex items-center">
          <g-link
            class="btn btn-adaptive-dark inline-block flex-grow text-center"
            :to="episode.path"
          >View show notes</g-link>

          <span class="inline-block mx-4">or</span>

          <SocialButtonCollection/>
        </div>
      </div>
    </Container>
  </article>
</template>

<script>
import PlyrAudio from '~/components/PlyrAudio'
import SocialButtonCollection from '~/components/SocialButtonCollection'

export default {
  props: {
    episode: {
      type: Object,
      required: true,
    },
  },

  components: {
    PlyrAudio,
    SocialButtonCollection,
  },
}
</script>

<style>
</style>
