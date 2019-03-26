<template>
  <div class="bg-grey-light text-center py-12 px-8">
    <div class="max-w-5xl mx-auto">
      <h3>Brought to you by</h3>

      <ul class="mt-6 p-0 flex flex-wrap justify-center -mx-2">
        <li
          v-for="member in team"
          :key="member.name"
          class="list-reset w-full md:w-1/2 xl:w-1/4 p-2"
        >
          <div
            class="bg-adaptive-dark mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"
          >
            <a
              :href="member.url"
              class="lg:flex lg:items-center px-6 py-4 no-underline"
            >
              <img
                class="bg-white block h-16 sm:h-24 rounded-full mx-auto mb-4 lg:mb-0 lg:mr-4 lg:ml-0"
                :src="member.image"
                :alt="member.name"
              >
              <div class="text-center lg:text-left lg:flex-grow">
                <p class="text-xl text-white leading-tight">{{ member.name }}</p>
                <p class="text-sm leading-tight text-grey-dark">
                  <strong>{{ member.role}}</strong>
                  <span v-if="member.twitter">&nbsp;/ {{ member.twitter }}</span>
                </p>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TeamData from '~/data/team'

export default {
  data() {
    return {
      team: TeamData,
    }
  },
}
</script>
