<template>
  <ul class="pl-0 inline-block">
    <li class="list-reset inline-block">
      <a
        :href="facebookUrl"
        target="_blank"
        rel="noopener"
        class="btn btn-facebook shadow"
      >Facebook</a>
    </li>
    <li class="list-reset ml-4 inline-block">
      <a
        :href="twitterUrl"
        target="_blank"
        rel="noopener"
        class="btn btn-twitter shadow"
      >Twitter</a>
    </li>
    <li class="list-reset ml-4 inline-block">
      <a
        :href="emailUrl"
        target="_blank"
        rel="noopener"
        class="btn btn-black shadow"
      >Email</a>
    </li>
  </ul>
</template>

<script>
export default {
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
