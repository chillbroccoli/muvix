<script setup lang="ts">
import { Heart, HeartOff, Star, Calendar } from 'lucide-vue-next';
import { Resource } from '@/utils/types';
import useWatchlistStore from '@/stores/watchlist';
import { POSTER_IMAGE } from '@/utils/constants/images';
import imageNotFound from '@/assets/images/image_not_available.png';
import getLinkHref from '@/utils/helpers/getLinkHref';
import getWatchlistItemType from '@/utils/helpers/getWatchlistItemType';

const props = defineProps<{ item: Resource; hrefType: 'movies' | 'tv' }>();

const store = useWatchlistStore();

const imageSrc = props.item.poster_path
  ? `${POSTER_IMAGE.W342}${props.item.poster_path}`
  : imageNotFound;

const itemInWatchlist = (store.watchlist ?? []).find(
  (item: Resource) => item.id === props.item.id
);

const addPadding =
  props.item.vote_average &&
  (props.item?.release_date || props.item?.first_air_date);

const title = props.item?.title ?? props.item?.name ?? '';

const linkHref = getLinkHref(props.item, props.hrefType);
const watchlistItemType = getWatchlistItemType(props.item, props.hrefType);

const handleAddToWatchlistClick = (e: Event, item: Resource) => {
  e.preventDefault();

  store.addToWatchlist(item, watchlistItemType);
};
</script>

<template>
  <NuxtLink :to="linkHref" class="group" :prefetch="false">
    <div
      class="relative overflow-hidden rounded-md shadow-sm bg-zinc-800 shadow-white/20"
    >
      <div class="relative">
        <div class="overflow-hidden">
          <nuxt-img
            :src="imageSrc"
            :alt="title"
            class="transition-all duration-200 ease-in-out group-hover:scale-110 w-full h-[300px]"
          />
        </div>
        <button
          type="button"
          class="absolute rounded-bl-xl top-0 p-2 -right-[100%] bg-pink-500/80 group-hover:-right-0 transition-all duration-300 ease-in-out z-10"
          @click="(event) => handleAddToWatchlistClick(event, item)"
        >
          <template v-if="itemInWatchlist">
            <HeartOff class="text-white" :size="24" />
          </template>
          <template v-else>
            <Heart class="text-white" :size="24" />
          </template>
        </button>
        <div
          class="absolute top-0 bottom-0 left-0 right-0 transition-all duration-200 ease-in-out bg-black/20 group-hover:bg-black/40"
        ></div>
      </div>

      <div class="p-2">
        <div class="flex items-center mt-1 space-x-2">
          <div
            v-if="item?.vote_average && item.vote_average > 0"
            class="flex items-center space-x-1"
          >
            <Star class="text-pink-500" :size="16" />
            <span class="text-sm font-extralight text-zinc-300">{{
              item.vote_average.toFixed(1)
            }}</span>
          </div>

          <div v-if="item?.release_date" class="flex items-center space-x-1">
            <Calendar class="text-pink-500" :size="16" />
            <span class="text-sm font-extralight text-zinc-300">{{
              new Date(item.release_date).getFullYear()
            }}</span>
          </div>

          <div v-if="item?.first_air_date" class="flex items-center space-x-1">
            <Calendar class="text-pink-500" :size="16" />
            <span class="text-sm font-extralight text-zinc-300">{{
              new Date(item.first_air_date).getFullYear()
            }}</span>
          </div>
        </div>

        <p
          :class="[
            'pb-1 text-sm font-extralight text-zinc-100 flex items-end h-[50px]',
            addPadding && 'pt-3',
          ]"
        >
          {{ title }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
