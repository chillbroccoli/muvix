<script lang="ts" setup>
import { Grid, Columns } from 'lucide-vue-next';
import useSettingsStore from '~/stores/settings';

const store = useSettingsStore();

const buttonClass =
  'bg-pink-500/70 dark:bg-pink-500/30 hover:bg-pink-500/60 dark:hover:bg-pink-500/40 rounded-md p-1';
</script>

<template>
  <div class="text-white">
    <span class="flex items-center">
      <button
        type="button"
        :class="[
          buttonClass,
          store.displayMode === 'grid' && 'bg-pink-800 dark:bg-pink-500/60',
        ]"
        @click="store.setDisplayMode('grid')"
      >
        <span class="sr-only">Previous</span>
        <Grid class="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        :class="[
          buttonClass,
          store.displayMode === 'carousel' && 'bg-pink-800 dark:bg-pink-500/60',
        ]"
        @click="store.setDisplayMode('carousel')"
      >
        <span class="sr-only">Next</span>
        <Columns class="h-5 w-5" aria-hidden="true" />
      </button>
    </span>
  </div>
</template>
