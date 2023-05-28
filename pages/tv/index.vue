<script setup lang="ts">
import TvShowsView from '~/components/views/TvShowsView.vue';
import { TvShowsResponse } from '~/utils/types';

const { data, error } = await useFetch<TvShowsResponse>('/api/tv');

if (error.value) {
  throw createError(error.value);
}

const pageTitle = 'Muvix | TV Shows';

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
    <TvShowsView
      :top-rated="data.topRated"
      :popular="data.popular"
      :trending="data.trending"
      :genres="data.genres"
    />
  </div>
</template>
