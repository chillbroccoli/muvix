<script setup lang="ts">
import TvShowsView from '~/components/views/TvShowsView.vue';

const { data, error } = await useFetch('/api/tv');

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <div v-if="data">
    <TvShowsView
      :top-rated="data.topRated"
      :popular="data.popular"
      :trending="data.trending"
    />
  </div>
</template>
