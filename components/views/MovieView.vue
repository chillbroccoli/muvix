<script setup lang="ts">
import { MovieResponse } from '~/utils/types';

import ResourceFeatured from '../featured/ResourceFeatured.vue';

defineProps<MovieResponse>();
</script>

<template>
  <div class="w-full">
    <ResourceFeatured :item="details" />
    <MovieDetails :item="details" :similar="similar.results" />
  </div>
</template>
