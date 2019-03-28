<template>
  <article class="py-12 bg-grey-light">
    <Container>
      <header>
        <time
          :datetime="episode.publishedAt"
        >{{ episode.publishedAt | localeDate }}</time>

        <h1 class="text-3xl lg:text-5xl leading-tight my-2">
          <g-link
            class="no-underline text-black"
            :to="episode.path"
          >{{ episode.title }}</g-link>
        </h1>
      </header>

      <p
        class="text-xl lg:text-2xl leading-tight mt-4 mb-6 max-w-lg"
      >{{ episode.description }}</p>

      <div class="bg-white rounded shadow p-4">
        <PlyrAudio :audio-url="episode.audioUrl"/>

        <div class="mt-4 flex flex-col md:flex-row items-center">
          <g-link
            v-if="!isPermalink"
            class="btn btn-adaptive-dark inline-block w-full md:w-auto flex justify-center items-center flex-grow text-center mb-2 md:mb-0"
            :to="episode.path"
          >
            <file-text-icon class="mr-3"/>View&nbsp;show&nbsp;notes
          </g-link>

          <span
            v-if="!isPermalink"
            class="hidden md:block mx-4"
          >or</span>

          <SocialButtonCollection/>
        </div>
      </div>
    </Container>
  </article>
</template>

<script>
import { FileTextIcon } from 'vue-feather-icons'
import PlyrAudio from '~/components/PlyrAudio'
import SocialButtonCollection from '~/components/SocialButtonCollection'

export default {
  props: {
    episode: {
      type: Object,
      required: true,
    },
    isPermalink: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    PlyrAudio,
    SocialButtonCollection,
    FileTextIcon,
  },
}
</script>

<style></style>
