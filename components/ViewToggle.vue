<script lang="ts" setup>
import { Grid, Columns } from 'lucide-vue-next';
import useSettingsStore from '../stores/settings';

const store = useSettingsStore();
</script>

<template>
  <div class="p-4 px-8">
    <span class="flex items-center shadow-sm p-2">
      <button
        type="button"
        :class="[
          'bg-pink-500/30 hover:bg-pink-500/40 rounded-md p-1',
          store.displayMode === 'grid' && 'bg-pink-500/60',
        ]"
        @click="store.setDisplayMode('grid')"
      >
        <span class="sr-only">Previous</span>
        <Grid class="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        :class="[
          'bg-pink-500/30 hover:bg-pink-500/40 rounded-md p-1',
          store.displayMode === 'carousel' && 'bg-pink-500/60',
        ]"
        @click="store.setDisplayMode('carousel')"
      >
        <span class="sr-only">Next</span>
        <Columns class="h-5 w-5" aria-hidden="true" />
      </button>
    </span>
  </div>
</template>
