<template>
  <Container class="flex pt-6">
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

        <ul>
          <li
            v-for="host in hosts"
            :key="host.name"
          >
            <a
              class="block"
              :href="host.link"
              target="_blank"
              rel="noopener"
            >
              <g-image
                :src="host.image"
                :alt="host.name"
                :title="host.name"
                :key="host.image"
                width="44"
                height="44"
              />
              {{ host.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="main w-2/3 pl-4">
      <slot/>
    </div>
  </Container>
</template>

<static-query>
  query Metadata {
    metaData {
      siteName
    }
  }
</static-query>

<script>
export default {
  data() {
    return {
      podcastLocations: [
        {
          name: 'Apple Podcasts',
          link: 'https://geo.itunes.apple.com/ca/podcast/feed/id1048731980',
        },
        {
          name: 'Overcasts',
          link: 'https://overcast.fm/itunes1048731980',
        },
        {
          name: 'Pocketcasts',
          link: 'http://pca.st/itunes/1048731980',
        },
        {
          name: 'Google Podcasts',
          link: 'https://spec.fm/podcasts/does-not-compute',
        },
        {
          name: 'Castro',
          link: 'https://castro.fm/itunes/1048731980',
        },
        {
          name: 'Breaker',
          link: 'https://www.breaker.audio/does-not-compute',
        },
        {
          name: 'RSS Feed',
          link: 'http://simplecast.fm/podcasts/1386/rss',
        },
      ],

      hosts: [
        {
          name: 'Sean Washington',
          link: 'https://twitter.com/seanwashbot',
          image: '/host-sean.jpg',
        },
        {
          name: 'Rockwell Schrock',
          link: 'https://twitter.com/Schrockwell',
          image: '/host-rockwell.png',
        },
      ],
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
  background: #fff;
}
</style>
