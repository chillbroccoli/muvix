<script lang="ts" setup>
import { Movie, MoviesResponse } from '~/utils/types';
import getRandomResource from '~/utils/helpers/getRandomResource';

import ItemsList from '../list/ItemsList.vue';
import SettingsBar from '../settings-bar/SettingsBar.vue';
import ResourceFeatured from '../featured/ResourceFeatured.vue';
import GenresSelect from '../select/GenresSelect.vue';

const props = defineProps<MoviesResponse>();

const router = useRouter();

const selectedGenre = ref('');
const changeSelected = (value: string) => {
  selectedGenre.value = value;
};

watch(selectedGenre, (newGenre) => {
  if (newGenre) {
    router.push({ path: '/movies/by-genre', query: { id: newGenre, page: 1 } });
  }
});

const randomTrending = getRandomResource<Movie>([...props.topRated.results]);
</script>

<template>
  <div class="w-full h-full">
    <ClientOnly>
      <ResourceFeatured :item="randomTrending" />
    </ClientOnly>
    <SettingsBar />

    <GenresSelect
      :genres="genres"
      :selected="selectedGenre"
      @change-selected="changeSelected"
    />

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
