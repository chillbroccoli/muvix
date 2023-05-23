<script lang="ts" setup>
import nav from '~/utils/constants/nav';
</script>

<template>
  <div class="h-full lg:mt-6">
    <ul
      class="flex flex-row items-center justify-center h-full space-x-4 lg:items-start lg:justify-start lg:space-x-0 lg:space-y-6 lg:flex-col"
    >
      <li
        v-for="item in nav"
        :key="item.href"
        class="transition-colors duration-200 ease-in-out rounded-md hover:bg-pink-500/30"
      >
        <NuxtLink :to="item.href" class="flex w-full h-full gap-4 p-2">
          <div>
            <component :is="item.icon" :size="24" />
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
