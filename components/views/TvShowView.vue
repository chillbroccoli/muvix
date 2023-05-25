<script lang="ts" setup>
import { TvShowResponse } from '~/utils/types';

import ResourceFeatured from '../featured/ResourceFeatured.vue';
import TvShowDetails from '../tv-show/TvShowDetails.vue';

defineProps<TvShowResponse>();
</script>

<template>
  <div class="w-full">
    <ClientOnly>
      <ResourceFeatured :item="details" />
    </ClientOnly>
    <TvShowDetails :item="details" :similar="similar.results" />
  </div>
</template>
