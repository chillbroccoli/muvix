<script lang="ts" setup>
import MoviesByGenreView from '~/components/views/MoviesByGenreView.vue';
import { Genre, MoviesByGenreResponse } from '~/utils/types';

definePageMeta({
  key: (r) => r.fullPath,
});

const route = useRoute();

const { data, error } = await useFetch<MoviesByGenreResponse>(
  '/api/movies/by-genre',
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

const pageTitle = `Muvix | Movies - ${genre?.name ?? 'By Genre'}`;

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
    <MoviesByGenreView :movies="data.movies" :genres="data.genres" />
  </div>
</template>
