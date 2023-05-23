<script lang="ts" setup>
import TvShowView from '~/components/views/TvShowView.vue';

const route = useRoute();

const { data, error } = await useFetch(`/api/tv/${route.params.id as string}`);

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <div v-if="data">
    <TvShowView :details="data.details" :similar="data.similar" />
  </div>
</template>
