<script lang="ts" setup>
import { TvShowResponse } from '~/utils/types';

import ResourceFeatured from '../featured/ResourceFeatured.vue';
import TvShowDetails from '../tv-show/TvShowDetails.vue';

defineProps<TvShowResponse>();
</script>

<template>
  <div class="w-full">
    <ResourceFeatured :item="details" />
    <TvShowDetails :item="details" :similar="similar.results" />
  </div>
</template>
