// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'vue-plyr/dist/vue-plyr.css'
import '~/css/site.css'

import VuePlyr from 'vue-plyr'

import Filters from '~/filters'
import DefaultLayout from '~/layouts/Default.vue'
import DefaultContainer from '~/components/Container.vue'

export default function(Vue, { router, head, isClient }) {
  Vue.use(VuePlyr)
  Vue.use(Filters)
  Vue.component('Layout', DefaultLayout)
  Vue.component('Container', DefaultContainer)
}
