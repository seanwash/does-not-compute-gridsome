<template>
  <div class="bg-grey-darkest py-4">
    <Container>
      <nav>
        <g-link
          class="text-white"
          to="/"
        >Home</g-link>

        <template v-for="link in links">
          <span
            :key="link.path"
            class="text-white"
          >&nbsp;/&nbsp;</span>
          <g-link
            :key="link.path"
            class="text-white"
            :to="link.path"
          >{{ link.name }}</g-link>
        </template>
      </nav>
    </Container>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style>
</style>
