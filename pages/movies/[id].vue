<script setup lang="ts">
import MovieView from '~/components/views/MovieView.vue';
import { MovieResponse } from '~/utils/types';

const route = useRoute();

const { data, error } = await useFetch<MovieResponse>(
  `/api/movies/${route.params.id as string}`
);

if (error.value) {
  throw createError(error.value);
}

const pageTitle = `Muvix | ${data?.value?.details?.title}`;
const pageDescription = `${data?.value?.details?.tagline}`;

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  twitterDescription: pageDescription,
});

useHead({
  title: pageTitle,
});
</script>

<template>
  <div v-if="data">
    <MovieView :details="data.details" :similar="data.similar" />
  </div>
</template>
