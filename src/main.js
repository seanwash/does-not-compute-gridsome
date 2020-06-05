// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/css/site.css'

import Vuex from 'vuex'
import Filters from '~/filters'
import DefaultLayout from '~/layouts/Default.vue'
import DefaultContainer from '~/components/Container.vue'
import GlobalMetaTags from '~/data/global-meta-tags'

/**
 * @param Vue                 Vue instance
 * @param context.appOptions  Options for the Vue instance
 * @param context.router      The router instance
 * @param context.head        VueMeta info object
 * @param context.isClient
 * @param context.isServer
 */
export default function(Vue, { head, appOptions }) {
  Vue.use(Filters)

  // Components
  Vue.component('Layout', DefaultLayout)
  Vue.component('Container', DefaultContainer)

  // ========================================================
  // = Global Head/Meta
  // ========================================================

  let descriptionObjectIndex = head.meta.findIndex(obj => {
    return obj.key === 'description'
  })

  head.meta[descriptionObjectIndex] = {
    key: 'description',
    name: 'description',
    content: GlobalMetaTags.description,
  }

  head.meta.push({
    key: 'og:description',
    property: 'og:description',
    content: GlobalMetaTags.description,
  })

  head.meta.push({
    key: 'og:site_name',
    property: 'og:site_name',
    content: 'Does Not Compute',
  })

  head.meta.push({
    key: 'og:type',
    property: 'og:type',
    content: 'website',
  })

  head.meta.push({
    key: 'og:image',
    property: 'og:image',
    content: process.env.GRIDSOME_ROOT_URL + '/assets/does-not-compute.jpg',
  })

  head.meta.push({
    name: 'keywords',
    content: GlobalMetaTags.keywords,
  })

  // ========================================================
  // = Vuex Store
  // ========================================================

  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    state: {
      episode: {
        enclosure_url: '',
      },
      playing: false,
    },
    mutations: {
      setEpisode(state, episode) {
        state.episode = episode
      },
      setPlaying(state, value) {
        state.playing = value
      },
    },
    actions: {
      play({ commit }) {
        commit('setPlaying', true)
      },
      pause({ commit }) {
        commit('setPlaying', false)
      },
      selectEpisode({ commit, dispatch }, episode) {
        commit('setEpisode', episode)
        dispatch('play')
      },
    },
  })
}
