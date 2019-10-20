<template>
  <div
    v-show="episode.id"
    class="omniplyer max-w-sm bg-white shadow rounded p-4"
  >
    <div class="flex justify-between">
      <g-link
        class="text-black no-underline block text-overflow-ellipsis"
        :to="episode.path"
      >{{ episode.title }}</g-link>

      <button
        class="ml-1"
        role="button"
        @click="stop"
      >
        <span class="visually-hidden">Close Player</span>
        <x-circle-icon aria-hidden="true"/>
      </button>
    </div>

    <vue-plyr
      ref="plyr"
      class="mt-2"
    >
      <audio>
        <source
          :src="episode.audio_url"
          type="audio/mp3"
        >
      </audio>
    </vue-plyr>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { XCircleIcon } from 'vue-feather-icons'

export default {
  components: {
    XCircleIcon,
  },

  watch: {
    episode: {
      deep: true,
      handler: function(val) {
        this.player.source = {
          type: 'audio',
          sources: [{ src: this.episode.audio_url, type: 'audio/mp3' }],
        }
      },
    },
  },

  data() {
    return {
      player: null,
    }
  },

  computed: {
    ...mapState({
      episode: state => state.episode,
      playing: state => state.playing,
    }),
  },

  methods: {
    ...mapActions(['play', 'pause', 'selectEpisode']),

    assignPlyr(event) {
      // Plyr emits a `ready` event each time `player.source` changes. Don't overwrite our already existing instance of
      // Plyr.
      if (this.player === null) {
        // Cache our Plyr instance and subscribe to relevant Plyr events.
        // https://github.com/sampotts/plyr#events
        this.player = event.detail.plyr
        this.player.on('play', this.play)
        this.player.on('pause', this.pause)
      }

      if (this.playing) {
        this.player.play()
      } else {
        this.player.pause()
      }
    },

    stop() {
      this.selectEpisode({})
    },
  },

  mounted() {
    // Wait for DOM and Plyr to be ready before we kick things off.
    this.$refs.plyr.$el.addEventListener('ready', this.assignPlyr)
  },
}
</script>

<style scoped>
.omniplyer {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 1000;
}
</style>

