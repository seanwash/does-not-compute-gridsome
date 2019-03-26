<template>
  <div>
    <header class="p-4 bg-black flex">
      <a
        class="inline-block no-underline text-white"
        href="/"
      >Does Not Compute</a>

      <nav class="ml-4 flex flex-grow justify-between">
        <div>
          <g-link
            class="text-white inline-block"
            to="/episodes"
          >Episodes</g-link>
          <g-link
            class="text-white inline-block ml-2"
            to="/blog"
          >Blog</g-link>
        </div>

        <div>
          <g-link
            class="text-white inline-block ml-2"
            to="/contact"
          >Contact</g-link>
          <a
            class="text-white inline-block ml-2"
            href="https://spec.fm/sponsors"
          >Sponsor</a>
        </div>
      </nav>
    </header>

    <slot name="hero"/>

    <Container class="main">
      <slot/>
    </Container>

    <slot name="post-content"/>

    <footer class="py-12">
      <Container class="flex justify-between items-center">
        <p>
          &copy; {{ new Date().getFullYear() }} Does Not Compute. Produced by
          <a
            class="text-black"
            href="https://spec.fm"
          >SpecFm</a>.
        </p>

        <a
          class="text-black"
          href="https://twitter.com/dnccast"
        >
          <twitter-icon/>
        </a>
      </Container>
    </footer>
  </div>
</template>

<static-query>
  query Metadata {
    metaData {
      siteName
    }
  }
</static-query>

<script>
import Sidebar from '~/components/Sidebar'
import { TwitterIcon } from 'vue-feather-icons'

export default {
  components: { Sidebar, TwitterIcon },
}
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  /* https://tailwindcss.com/docs/colors/#app */
  background: #ffffff;
}
</style>
