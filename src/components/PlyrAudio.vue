<template>
  <vue-plyr
    :options="plyrOptions"
    class="mt-2"
  >
    <audio>
      <source
        :src="audio_url"
        type="audio/mp3"
      >
    </audio>
  </vue-plyr>
</template>

<script>
export default {
  props: {
    audio_url: {
      type: String,
      required: true,
    },
    // https://github.com/sampotts/plyr/blob/master/controls.md
    plyrOptions: {
      default: () => {
        return {
          controls: [
            'play',
            'progress',
            'current-time',
            'duration',
            'settings',
          ],
        }
      },
    },
  },
}
</script>
