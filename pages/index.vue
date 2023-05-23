<script setup lang="ts">
const { data, error } = await useFetch('/api');

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <div v-if="data">
    <HomeView :movies="data.movies" :tv="data.tv" />
  </div>
</template>
