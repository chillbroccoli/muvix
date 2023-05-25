<script lang="ts" setup>
import MoviesByGenreView from '~/components/views/MoviesByGenreView.vue';

definePageMeta({
  key: (r) => r.fullPath,
});

const route = useRoute();

const { data, error } = await useFetch('/api/movies/by-genre', {
  query: {
    id: route.query?.id,
    page: route.query?.page,
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <div v-if="data">
    <MoviesByGenreView :movies="data.movies" :genres="data.genres" />
  </div>
</template>
