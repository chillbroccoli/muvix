<script lang="ts" setup>
import useWatchlistStore, { WatchlistItem } from '~/stores/watchlist';

import ViewToggle from '../view-toggle/ViewToggle.vue';
import ItemsList from '../list/ItemsList.vue';

const store = useWatchlistStore();

const movies = store.watchlist.filter(
  (item: WatchlistItem) => item.resourceType === 'movie'
);
const tvShows = store.watchlist.filter(
  (item: WatchlistItem) => item.resourceType === 'tv'
);
</script>

<template>
  <div>
    <div class="pt-3">
      <ViewToggle />
    </div>
    <ItemsList :items="movies" title="Movies" href-type="movies" />
    <ItemsList :items="tvShows" title="Tv Shows" href-type="tv" />
  </div>
</template>
