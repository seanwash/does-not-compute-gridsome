<template>
  <div>
    <router-view />

    <omni-plyr />
  </div>
</template>

<script>
import OmniPlyr from '~/components/Omniplyr'

export default {
  name: 'App',

  components: {
    OmniPlyr,
  },
}
</script>
