<script lang="ts" setup>
import { Resource } from '~/utils/types';

type Props = {
  items: Resource[];
  hrefType?: 'movies' | 'tv';
};

withDefaults(defineProps<Props>(), {
  items: () => [],
  hrefType: 'movies',
});
</script>

<template>
  <div class="flex p-4 space-x-6 overflow-x-scroll flex-nowrap snap-x">
    <CarouselItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      :href-type="hrefType"
    />
  </div>
</template>
