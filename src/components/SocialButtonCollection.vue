<template>
  <ul class="pl-0 w-full flex flex-wrap">
    <li class="list-reset w-full md:w-1/3">
      <a
        :href="facebookUrl"
        target="_blank"
        rel="noopener"
        class="btn btn-facebook shadow flex items-center justify-center"
      >
        <facebook-icon class="mr-3"/>Facebook
      </a>
    </li>
    <li class="list-reset w-full md:w-1/3 mt-2 md:mt-0 md:pl-2">
      <a
        :href="twitterUrl"
        target="_blank"
        rel="noopener"
        class="btn btn-twitter shadow flex items-center justify-center"
      >
        <twitter-icon class="mr-3"/>Twitter
      </a>
    </li>
    <li class="list-reset w-full md:w-1/3 mt-2 md:mt-0 md:pl-2">
      <a
        :href="emailUrl"
        target="_blank"
        rel="noopener"
        class="btn btn-black shadow flex items-center justify-center"
      >
        <mail-icon class="mr-3"/>Email
      </a>
    </li>
  </ul>
</template>

<script>
import { FacebookIcon, TwitterIcon, MailIcon } from 'vue-feather-icons'

export default {
  components: {
    FacebookIcon,
    TwitterIcon,
    MailIcon,
  },

  computed: {
    facebookUrl() {
      return 'https://www.facebook.com/sharer/sharer.php?u=https%3A//dnc.show'
    },

    twitterUrl() {
      return 'https://twitter.com/home?status=Listening%20to%20%40dnccast%20https%3A//dnc.show'
    },

    emailUrl() {
      return 'mailto:?&subject=Listening to Does Not Compute&body=Check%20it%20out!%20https%3A//dnc.show'
    },
  },
}
</script>

<style>
</style>
