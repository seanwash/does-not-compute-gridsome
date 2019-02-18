<template>
  <Container class="flex pt-6">
    <Sidebar/>

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
import Sidebar from '~/components/Sidebar'

export default {
  components: { Sidebar }
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
