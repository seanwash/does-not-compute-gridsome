<template>
  <div class="bg-grey-light text-center py-12">
    <Container>
      <h3>Brought to you by</h3>

      <ul class="mt-6 p-0 flex flex-wrap justify-center -mx-2">
        <li
          v-for="host in hosts"
          :key="host.name"
          class="list-reset w-full md:w-1/2 lg:w-1/3 p-2"
        >
          <div
            class="bg-adaptive-dark mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"
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
    </Container>
  </div>
</template>

<script>
import HostData from '~/data/hosts'

export default {
  name: 'HostBar',

  data() {
    return {
      hosts: HostData,
    }
  },
}
</script>
