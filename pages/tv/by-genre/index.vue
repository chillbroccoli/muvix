<script lang="ts" setup>
import TvShowsByGenreView from '~/components/views/TvShowsByGenreView.vue';
import { Genre, TvShowsByGenreResponse } from '~/utils/types';

definePageMeta({
  key: (r) => r.fullPath,
});

const route = useRoute();

const { data, error } = await useFetch<TvShowsByGenreResponse>(
  '/api/tv/by-genre',
  {
    query: {
      id: route.query?.id,
      page: route.query?.page,
    },
  }
);

if (error.value) {
  throw createError(error.value);
}

const genre = data?.value?.genres.find(
  (item: Genre) => item.id === Number(route.query?.id)
);

const pageTitle = `Muvix | Tv Shows - ${genre?.name ?? 'By Genre'}`;

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
    <TvShowsByGenreView :tv-shows="data.tvShows" :genres="data.genres" />
  </div>
</template>
