<template>
  <div class="py-12 bg-grey-light">
    <Container class="flex items-center">
      <div class="w-1/3 hidden lg:block">
        <h1 class="text-6xl text-black m-0 leading-none">
          Does
          <br />Not
          <br />Compu
          <br />te 🤯
        </h1>
      </div>

      <div
        class="w-full lg:w-2/3 flex flex-col justify-center text-center lg:text-left"
      >
        <h2
          class="text-3xl text-black font-normal leading-tight max-w-md mx-auto lg:mx-0 mb-6"
        >
          <strong>Does Not Compute</strong> is a weekly podcast about the lives and workflows of two indie web app developers.
          <br />
          <br />New episodes every Tuesday.
        </h2>

        <PodcastPlayerCollection />
      </div>
    </Container>
  </div>
</template>

<script>
import PodcastPlayerCollection from '~/components/PodcastPlayerCollection'

export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
  },

  components: {
    PodcastPlayerCollection,
  },
}
</script>
