<template>
  <div class="py-4">
    <nav>
      <g-link
        class="text-black"
        to="/"
      >Home
      </g-link>

      <template v-for="link in links">
        <span
          class="text-black"
        >&nbsp;/&nbsp;</span>

        <g-link
          class="text-black"
          :to="link.path"
        >{{ link.name }}
        </g-link>
      </template>
    </nav>
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
