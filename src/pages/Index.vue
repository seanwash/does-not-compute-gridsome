<template>
  <Layout>
    <div class="flex">
      <div>
        <g-image alt="Example image" src="/does-not-compute.jpg" width="280" />
      </div>

      <div class="pl-4">
        <h1>Does Not Compute</h1>

        <h2>A weekly chat about the lives and workflows of modern web developers</h2>

        <ul class="flex pl-0 mt-4">
          <li class="list-reset">
            <button class="btn btn-blue">Facebook</button>
          </li>
          <li class="list-reset ml-4">
            <button class="btn">Twitter</button>
            </li>
          <li class="list-reset ml-4">
            <button class="btn">Copy Link</button>
          </li>
        </ul>
      </div>
    </div>

    <ul>
      <li v-for="{ node } in $page.episodes.edges" :key="node.id">
        <episode-summary :episode="node"/>
      </li>
    </ul>

    <g-link class="btn" to="/episodes">View More Episodes</g-link>
  </Layout>
</template>

<page-query>
query Episode {
  episodes: allEpisode(sortBy: "publishedAt", perPage: 10) {
    edges {
      node {
        id
        title
        description
        publishedAt
        slug
      }
    }
  }
}
</page-query>

<script>
import EpisodeSummary from "~/components/EpisodeSummary"

export default {
  components: {
    EpisodeSummary
  }
};
</script>

<style>
</style>
