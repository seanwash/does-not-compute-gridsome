import localDate from './localDate'

export default {
  install(Vue) {
    Vue.filter('localeDate', localDate)
  },
}
