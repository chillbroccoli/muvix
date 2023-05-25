<script lang="ts" setup>
import MoviesView from '~/components/views/MoviesView.vue';

const { data, error } = await useFetch('/api/movies');

if (error.value) {
  throw createError(error.value);
}

const pageTitle = 'Movix | Movies';

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
    <MoviesView
      :top-rated="data.topRated"
      :popular="data.popular"
      :now-playing="data.nowPlaying"
      :genres="data.genres"
    />
  </div>
</template>
