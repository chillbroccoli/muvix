<script lang="ts" setup>
import getRandomResource from '~/utils/helpers/getRandomResource';
import { Genre, TvShow, TvShowsByGenreResponse } from '~/utils/types';
import ResourceFeatured from '../featured/ResourceFeatured.vue';
import SettingsBar from '../settings-bar/SettingsBar.vue';
import ItemsList from '../list/ItemsList.vue';
import BasePagination from '../pagination/BasePagination.vue';
import GenresSelect from '../select/GenresSelect.vue';

const props = defineProps<TvShowsByGenreResponse>();

const route = useRoute();
const router = useRouter();

const genre = props.genres.find(
  (item: Genre) => item.id === Number(route.query?.id)
);

const selectedGenre = ref(String(genre?.id) ?? '');
const changeSelected = (value: string) => {
  selectedGenre.value = value;
};

watch(selectedGenre, (newGenre) => {
  if (newGenre) {
    router.push({ path: '/tv/by-genre', query: { id: newGenre, page: 1 } });
  }
});

const randomResource = getRandomResource<TvShow>([...props.tvShows.results]);

const goToPreviousPage = () => {
  router.push({
    path: route.path,
    query: {
      id: route.query?.id,
      page: Number(route.query?.page ?? 1) - 1,
    },
  });
};

const goToNextPage = () => {
  router.push({
    path: route.path,
    query: {
      id: route.query?.id,
      page: Number(route.query?.page ?? 1) + 1,
    },
  });
};
</script>

<template>
  <div class="w-full">
    <ClientOnly>
      <ResourceFeatured :item="randomResource" />
    </ClientOnly>
    <SettingsBar />

    <GenresSelect
      :genres="genres"
      :selected="selectedGenre"
      @change-selected="changeSelected"
    />

    <ItemsList :items="tvShows.results" :title="genre?.name ?? ''" />

    <BasePagination
      :current-page="tvShows.page"
      :total-pages="tvShows.total_pages"
      @go-to-previous-page="goToPreviousPage"
      @go-to-next-page="goToNextPage"
    />
  </div>
</template>
