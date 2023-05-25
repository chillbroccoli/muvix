<script setup lang="ts">
import SideBar from '~/components/sidebar/SideBar.vue';
import BaseFooter from '~/components/footer/BaseFooter.vue';
import useSettingsStore from '~/stores/settings';

const store = useSettingsStore();

useSeoMeta({
  ogTitle: 'Movix',
  ogImage: '/android-chrome-512x512.png',
  ogDescription:
    'Discover and Explore Movies and TV Shows - Your ultimate destination to lookup, check, and search for your favorite movies and TV shows',
  twitterTitle: 'Movix',
  twitterDescription:
    'Discover and Explore Movies and TV Shows - Your ultimate destination to lookup, check, and search for your favorite movies and TV shows',
  twitterImage: '/android-chrome-512x512.png',
  twitterCard: 'summary_large_image',
});

useServerHead({
  htmlAttrs: {
    class: store.isDark ? 'dark' : '',
    lang: 'en',
  },
});
</script>

<template>
  <div
    class="min-h-full bg-gray-50 dark:bg-zinc-900 dark:text-white text-gray-600"
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
