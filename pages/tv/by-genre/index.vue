<script lang="ts" setup>
import TvShowsByGenreView from '~/components/views/TvShowsByGenreView.vue';

definePageMeta({
  key: (r) => r.fullPath,
});

const route = useRoute();

const { data, error } = await useFetch('/api/tv/by-genre', {
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
    <TvShowsByGenreView :tv-shows="data.tvShows" :genres="data.genres" />
  </div>
</template>
