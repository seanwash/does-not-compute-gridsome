<template>
  <div class="sidebar w-1/3 pr-4">
    <g-link
      to="/"
      title="Home"
    >
      <g-image
        title="Does Not Compute"
        alt="Does Not Compute Show Art"
        src="/does-not-compute.jpg"
        width="280"
        height="280"
        class="shadow"
      />
    </g-link>

    <div class="my-4">
      <g-link class="block" to="/blog">Blog</g-link>
      <g-link class="block" to="/episodes">Episodes</g-link>
    </div>

    <div>
      <span>Listen at</span>

      <ul>
        <li
          v-for="location in podcastLocations"
          :key="location.name"
        >
          <a
            :href="location.link"
            target="_blank"
            rel="noopener"
          >{{ location.name }}</a>
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
          <a
            class="block"
            :href="host.link"
            target="_blank"
            rel="noopener"
          >
            <div class="flex">
              <div>
                <g-image
                  :src="host.image"
                  :alt="host.name"
                  :title="host.name"
                  :key="host.image"
                  width="44"
                  height="44"
                />
              </div>
              <div>
                <span class="block">{{ host.name }}</span>
                <span class="block">{{ host.twitter }}</span>
              </div>
            </div>
          </a>
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
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  /* https://tailwindcss.com/docs/colors/#app */
  background: #FFFFFF;
}
</style>
