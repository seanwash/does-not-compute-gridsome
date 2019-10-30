<template>
  <ul class="pl-0 mt-0 -mx-2 flex flex-wrap">
    <li
      v-for="( location, index ) in podcastLocations"
      :key="location.name"
      class="list-reset p-2 w-full sm:w-1/2 lg:w-1/4"
    >
      <a
        :href="location.link"
        target="_blank"
        rel="noopener"
        :class="[btnColor]"
        class="flex items-center text-sm p-2 shadow"
      >
        <img
          :src="location.image"
          :alt="location.name"
          class="mr-2"
        />
        {{ location.name }}
      </a>
    </li>
  </ul>
</template>

<script>
import PodcastLocationData from '~/data/podcast-locations'

export default {
  props: {
    variant: {
      type: String,
      default: 'dark',
      validator: function(value) {
        return ['light', 'dark'].includes(value)
      },
    },
  },

  data() {
    return {
      podcastLocations: PodcastLocationData,
    }
  },

  computed: {
    btnColor() {
      return `btn btn-adaptive-${this.variant}`
    },
  },
}
</script>

<style>
</style>
