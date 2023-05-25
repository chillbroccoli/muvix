<script setup lang="ts">
import getRandomResource from '~/utils/helpers/getRandomResource';
import { TvShow, TvShowsResponse } from '~/utils/types';

import ResourceFeatured from '../featured/ResourceFeatured.vue';
import SettingsBar from '../settings-bar/SettingsBar.vue';
import ItemsList from '../list/ItemsList.vue';

const props = defineProps<TvShowsResponse>();

const randomResource = getRandomResource<TvShow>(props.topRated.results);

const popularSorted = [...props.popular.results].sort(
  (a: TvShow, b: TvShow) => b.vote_average - a.vote_average
);
const topRatedSorted = [...props.topRated.results].sort(
  (a: TvShow, b: TvShow) => b.vote_average - a.vote_average
);
const trendingSorted = [...props.trending.results].sort(
  (a: TvShow, b: TvShow) => b.vote_average - a.vote_average
);
</script>

<template>
  <div class="w-full">
    <ClientOnly>
      <ResourceFeatured :item="randomResource" />
    </ClientOnly>
    <SettingsBar />

    <ItemsList
      :items="topRatedSorted"
      title="Top Rated"
      shortened
      href-type="tv"
    />
    <ItemsList
      :items="popularSorted"
      title="Popular"
      shortened
      href-type="tv"
    />
    <ItemsList
      :items="trendingSorted"
      title="Trending"
      shortened
      href-type="tv"
    />
  </div>
</template>
