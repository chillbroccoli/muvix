<script lang="ts" setup>
import { Heart, HeartOff } from 'lucide-vue-next';
import useWatchlistStore from '~/stores/watchlist';
import { TvShowDetails, Resource } from '~/utils/types';

import TvShowDetailsInfoList from './TvShowDetailsInfoList.vue';

const props = defineProps<{ item: TvShowDetails }>();

const store = useWatchlistStore();
const itemInWatchlist = computed(() => {
  return store.watchlist.find(
    (itemInList: Resource) => itemInList.id === props.item.id
  );
});

const handleAddToWatchlistClick = (item: Resource) => {
  store.addToWatchlist(item, 'tv');
};
</script>

<template>
  <div class="flex flex-col justify-between pt-8 lg:pt-0">
    <div>
      <p class="mb-2 text-xl font-semibold tracking-tighter">
        {{ item.name }}
      </p>
      <p>{{ item.tagline }}</p>
      <TvShowDetailsInfoList :item="item" />
    </div>

    <div class="pt-4 lg:pt-0">
      <button
        type="button"
        class="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-transparent border rounded-md shadow-sm border-pink-500/70 w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
        @click.prevent="handleAddToWatchlistClick(item)"
      >
        <template v-if="itemInWatchlist">
          <p class="text-gray-500 dark:text-gray-300">Remove from watchlist</p>
          <HeartOff class="ml-2 text-pink-500/70" />
        </template>
        <template v-else>
          <p class="text-gray-500 dark:text-gray-300">Add to watchlist</p>
          <Heart class="ml-2 text-pink-500/70" />
        </template>
      </button>
    </div>
  </div>
</template>
