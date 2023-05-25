<script lang="ts" setup>
import useWatchlistStore, { WatchlistItem } from '~/stores/watchlist';

import SettingsBar from '../settings-bar/SettingsBar.vue';
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
    <SettingsBar />
    <ItemsList :items="movies" title="Movies" href-type="movies" />
    <ItemsList :items="tvShows" title="Tv Shows" href-type="tv" />
  </div>
</template>
