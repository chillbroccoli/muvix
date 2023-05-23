<script lang="ts" setup>
import { Movie, MoviesResponse } from '~/utils/types';
import getRandomResource from '~/utils/helpers/getRandomResource';

import ItemsList from '../list/ItemsList.vue';
import ViewToggle from '../view-toggle/ViewToggle.vue';
import ResourceFeatured from '../featured/ResourceFeatured.vue';

const props = defineProps<MoviesResponse>();

const randomTrending = getRandomResource<Movie>([...props.topRated.results]);
</script>

<template>
  <div class="h-full w-full">
    <ClientOnly>
      <ResourceFeatured :item="randomTrending" />
    </ClientOnly>
    <div className="pt-3">
      <ViewToggle />
    </div>

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
