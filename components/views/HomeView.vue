<script lang="ts" setup>
import { HomeResponse, Movie, TvShow } from '~/utils/types';
import getRandomResource from '~/utils/helpers/getRandomResource';

import ItemsList from '../list/ItemsList.vue';
import ResourceFeatured from '../featured/ResourceFeatured.vue';
import SettingsBar from '../settings-bar/SettingsBar.vue';

const props = defineProps<HomeResponse>();

const randomTrending = getRandomResource<Movie | TvShow>([
  ...props.movies.results,
  ...props.tv.results,
]);
</script>

<template>
  <div class="h-full w-full">
    <ClientOnly>
      <ResourceFeatured :item="randomTrending" />
    </ClientOnly>
    <SettingsBar />
    <ItemsList
      :items="movies.results"
      title="Trending Movies"
      href-type="movies"
    />
    <ItemsList :items="tv.results" title="Trending Tv Shows" href-type="tv" />
  </div>
</template>
