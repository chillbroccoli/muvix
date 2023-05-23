<script lang="ts" setup>
import { Resource } from '~/utils/types';
import useSettingsStore from '~/stores/settings';

import BaseCarousel from '../carousel/BaseCarousel.vue';
import ListItem from './ListItem.vue';

type Props = {
  items: Resource[];
  title: string;
  shortened?: boolean;
  hrefType?: 'movies' | 'tv';
  withPagination?: boolean;
  itemsPerPage?: number;
  currentPage?: number;
  totalPages?: number;
  defaultDisplayMode?: 'grid' | 'carousel';
  goToPreviousPage?: () => void;
  goToNextPage?: () => void;
};

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  shortened: false,
  hrefType: 'movies',
  withPagination: false,
  itemsPerPage: undefined,
  currentPage: undefined,
  totalPages: undefined,
  defaultDisplayMode: undefined,
  goToPreviousPage: undefined,
  goToNextPage: undefined,
});

const settingsStore = useSettingsStore();

const itemsToDisplay = computed(() => {
  return props.shortened ? props.items.slice(0, 12) : props.items;
});

const shouldDisplayGrid = computed(() => {
  return (
    (props.defaultDisplayMode && props.defaultDisplayMode === 'grid') ||
    (!props.defaultDisplayMode && settingsStore.displayMode === 'grid')
  );
});

const shouldDisplayCarousel = computed(() => {
  return (
    (props.defaultDisplayMode && props.defaultDisplayMode === 'carousel') ||
    (!props.defaultDisplayMode && settingsStore.displayMode === 'carousel')
  );
});
</script>

<template>
  <div class="p-4 px-8 pt-8">
    <h5 class="pb-4 text-3xl font-semibold tracking-tighter">
      {{ title }}
    </h5>

    <template v-if="shouldDisplayGrid">
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-6">
        <ListItem
          v-for="item in itemsToDisplay"
          :key="item.id"
          :item="item"
          :href-type="hrefType"
        />
      </div>
    </template>
    <template v-if="shouldDisplayCarousel">
      <BaseCarousel :items="itemsToDisplay" :href-type="hrefType" />
    </template>
  </div>
</template>
