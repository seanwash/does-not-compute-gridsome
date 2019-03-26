// https://gridsome.org/docs/client-api

import Vuex from 'vuex'
import Omniplyr from '~/components/Omniplyr'

/**
 * @param Vue                 Vue instance
 * @param options             Plugin options
 * @param context.appOptions  Options for the Vue instance
 * @param context.router      The router instance
 * @param context.head        VueMeta info object
 * @param context.isClient
 * @param context.isServer
 */
export default function(Vue, options, { appOptions }) {
  Vue.component('Omniplyr', Omniplyr)

  appOptions.render = h => {
    return h('div', {}, [
      h('omniplyr'),
      h('router-view', { attrs: { id: 'app' } }),
    ])
  }

  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    state: {
      episode: {
        audioUrl: '',
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
