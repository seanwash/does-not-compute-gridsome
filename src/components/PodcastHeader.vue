<template>
  <div class="py-12">
    <div class="flex flex-col justify-center">
      <h1 class="text-black m-0 leading-none">Does Not Compute</h1>

      <h2 class="mt-4 mb-6 text-black font-normal leading-tight">{{ heading }}</h2>

      <ul class="flex pl-0">
        <li class="list-reset">
          <a
            :href="facebookUrl"
            target="_blank"
            rel="noopener"
            class="btn btn-facebook shadow"
          >Facebook</a>
        </li>
        <li class="list-reset ml-4">
          <a
            :href="twitterUrl"
            target="_blank"
            rel="noopener"
            class="btn btn-twitter shadow"
          >Twitter</a>
        </li>
        <li class="list-reset ml-4">
          <a
            :href="emailUrl"
            target="_blank"
            rel="noopener"
            class="btn btn-black shadow"
          >Email</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
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
