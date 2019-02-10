// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/css/site.css'

import DefaultLayout from '~/layouts/Default.vue'
import DefaultContainer from '~/components/Container.vue'

export default function(Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('Container', DefaultContainer)
}
