<template>
  <vue-plyr
    :options="plyrOptions"
    class="mt-2"
  >
    <audio>
      <source
        :src="audioUrl"
        type="audio/mp3"
      >
    </audio>
  </vue-plyr>
</template>

<script>
export default {
  props: {
    audioUrl: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      // https://github.com/sampotts/plyr/blob/master/controls.md
      plyrOptions: {
        controls: ['play', 'progress', 'current-time', 'duration', 'settings'],
      },
    }
  },
}
</script>

<style>
</style>
