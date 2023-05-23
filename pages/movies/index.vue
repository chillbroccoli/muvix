<script lang="ts" setup>
const { data, error } = await useFetch('/api/movies');

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <div v-if="data">
    <MoviesView
      :top-rated="data.topRated"
      :popular="data.popular"
      :now-playing="data.nowPlaying"
    />
  </div>
</template>
