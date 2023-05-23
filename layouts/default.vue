<script setup lang="ts">
import SideBar from '~/components/sidebar/SideBar.vue';
import BaseFooter from '~/components/footer/BaseFooter.vue';
import useSettingsStore from '~/stores/settings';

const store = useSettingsStore();

useServerHead({
  htmlAttrs: {
    class: store.isDark ? 'dark' : 'light',
  },
});
</script>

<template>
  <div
    class="min-h-full bg-pink-50 dark:bg-zinc-900 dark:text-white text-gray-500"
  >
    <SideBar />
    <div
      class="lg:w-[calc(100%_-_100px)] w-full lg:ml-[100px] h-full flex flex-col justify-between relative"
    >
      <main class="w-full">
        <slot />
      </main>
      <BaseFooter />
    </div>
  </div>
</template>
