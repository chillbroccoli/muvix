<script lang="ts" setup>
import TvShowView from '~/components/views/TvShowView.vue';
import { TvShowResponse } from '~/utils/types';

const route = useRoute();

const { data, error } = await useFetch<TvShowResponse>(
  `/api/tv/${route.params.id as string}`
);

if (error.value) {
  throw createError(error.value);
}

const pageTitle = `Muvix | ${data?.value?.details?.name}`;
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
    <TvShowView :details="data.details" :similar="data.similar" />
  </div>
</template>
