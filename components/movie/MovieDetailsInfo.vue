<script lang="ts" setup>
import { ExternalLink, Heart, HeartOff } from 'lucide-vue-next';
import useWatchlistStore from '~/stores/watchlist';
import { MovieDetails, Resource } from '~/utils/types';
import { IMDB_LINK_BASE_URL } from '~/utils/constants/images';

const props = defineProps<{ item: MovieDetails }>();

const store = useWatchlistStore();
const itemInWatchlist = computed(() => {
  return store.watchlist.find(
    (itemInList: Resource) => itemInList.id === props.item.id
  );
});

const imdbHref = `${IMDB_LINK_BASE_URL}/${props.item.imdb_id}`;

const handleAddToWatchlistClick = (item: Resource) => {
  store.addToWatchlist(item, 'movies');
};
</script>

<template>
  <div class="flex flex-col justify-between pt-8 lg:pt-0">
    <div>
      <p class="mb-2 text-xl font-semibold tracking-tighter">
        {{ item.title }}
      </p>
      <p>{{ item.tagline }}</p>
      <MovieDetailsInfoList :item="item" />
    </div>

    <div class="pt-4 lg:pt-0">
      <button
        type="button"
        class="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-transparent border rounded-md shadow-sm border-pink-500/70 w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
        @click.prevent="handleAddToWatchlistClick(item)"
      >
        <HeartOff v-if="itemInWatchlist" class="text-pink-500/70" />
        <Heart v-else class="text-pink-500/70" />
      </button>
    </div>
    <div v-if="item.imdb_id" class="pt-4 lg:pt-0">
      <a
        class="inline-flex items-center gap-x-1.5 rounded-md bg-pink-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
        :href="imdbHref"
        target="_blank"
        rel="noreferrer noopener"
      >
        Check on IMDB
        <ExternalLink class="-ml-0.5 h-5 w-5" aria-hidden="true" />
      </a>
    </div>
  </div>
</template>
