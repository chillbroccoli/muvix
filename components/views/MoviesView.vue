<script lang="ts" setup>
import { Movie, MoviesResponse } from '~/utils/types';
import getRandomResource from '~/utils/helpers/getRandomResource';

import ItemsList from '../list/ItemsList.vue';
import SettingsBar from '../settings-bar/SettingsBar.vue';
import ResourceFeatured from '../featured/ResourceFeatured.vue';

const props = defineProps<MoviesResponse>();

const randomTrending = getRandomResource<Movie>([...props.topRated.results]);
</script>

<template>
  <div class="w-full h-full">
    <ClientOnly>
      <ResourceFeatured :item="randomTrending" />
    </ClientOnly>
    <SettingsBar />

    <ItemsList
      :items="popular.results"
      title="Popular"
      shortened
      href-type="movies"
    />
    <ItemsList
      :items="topRated.results"
      title="Top Rated"
      shortened
      href-type="movies"
    />
    <ItemsList
      :items="nowPlaying.results"
      title="Now Playing"
      shortened
      href-type="movies"
    />
  </div>
</template>
