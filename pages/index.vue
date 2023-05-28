<script setup lang="ts">
import HomeView from '~/components/views/HomeView.vue';
import { HomeResponse } from '~/utils/types';

const { data, error } = await useFetch<HomeResponse>('/api');

if (error.value) {
  throw createError(error.value);
}

const pageTitle = 'Muvix | Home';

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
});

useHead({
  title: pageTitle,
});
</script>

<template>
  <div v-if="data">
    <HomeView :movies="data.movies" :tv="data.tv" />
  </div>
</template>
