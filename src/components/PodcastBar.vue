<template>
  <div class="py-12 bg-blue-darkest">
    <Container class="flex">
      <div>
        <g-image
          alt="Example image"
          src="/does-not-compute.jpg"
          width="280"
        />
      </div>

      <div class="pl-4 flex flex-col justify-center">
        <h1 class="text-white">Does Not Compute</h1>

        <h2
          class="text-white"
        >A weekly podcast about the lives and workflows of modern web developers</h2>

        <ul class="flex pl-0 mt-6">
          <li class="list-reset">
            <a
              :href="facebookUrl"
              target="_blank"
              rel="noopener"
              class="btn btn-facebook"
            >Facebook</a>
          </li>
          <li class="list-reset ml-4">
            <a
              :href="twitterUrl"
              target="_blank"
              rel="noopener"
              class="btn btn-twitter"
            >Twitter</a>
          </li>
          <li class="list-reset ml-4">
            <a
              :href="emailUrl"
              target="_blank"
              rel="noopener"
              class="btn btn-grey"
            >Email</a>
          </li>
        </ul>
      </div>
    </Container>
  </div>
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
