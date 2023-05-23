<script setup lang="ts">
import MovieView from '~/components/views/MovieView.vue';

const route = useRoute();

const { data, error } = await useFetch(
  `/api/movies/${route.params.id as string}`
);

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <div v-if="data">
    <MovieView :details="data.details" :similar="data.similar" />
  </div>
</template>
