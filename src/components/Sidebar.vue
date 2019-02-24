<template>
  <div class="sidebar w-1/3 pr-4">
    <g-link
      to="/"
      title="Home"
    >
      <g-image
        title="Does Not Compute"
        alt="Does Not Compute Show Art"
        src="/assets/does-not-compute.jpg"
        width="280"
        height="280"
        class="shadow"
      />
    </g-link>

    <div class="my-4">
      <g-link
        class="block"
        to="/blog"
      >Blog</g-link>
      <g-link
        class="block"
        to="/episodes"
      >Episodes</g-link>
    </div>

    <div class="my-4">
      <span>Listen at</span>

      <ul class="pl-0 mt-4">
        <li
          v-for="( location, index ) in podcastLocations"
          :key="location.name"
          class="list-reset"
          :class="{ 'mt-2': index !== 0 }"
        >
          <a
            :href="location.link"
            target="_blank"
            rel="noopener"
            class="block flex items-center rounded bg-grey-light p-4 text-black shadow no-underline"
          >
            <img
              :src="location.image"
              class="mr-2"
            >
            {{ location.name }}
          </a>
        </li>
      </ul>
    </div>

    <div>
      <span>Hosted by</span>

      <ul class="p-0">
        <li
          v-for="host in hosts"
          :key="host.name"
          class="list-reset"
        >
          <div
            class="bg-black mt-4 mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"
          >
            <a
              :href="host.url"
              class="sm:flex sm:items-center px-6 py-4 no-underline"
            >
              <img
                class="bg-white block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
                :src="host.image"
                :alt="host.name"
              >
              <div class="text-center sm:text-left sm:flex-grow">
                <p class="text-xl text-white leading-tight">{{ host.name }}</p>
                <p
                  class="text-sm leading-tight text-grey-dark"
                >{{ host.twitter }}</p>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PodcastLocationData from '~/data/podcast-locations'
import HostData from '~/data/hosts'

export default {
  name: 'Sidebar',

  data() {
    return {
      podcastLocations: PodcastLocationData,
      hosts: HostData,
    }
  },
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
