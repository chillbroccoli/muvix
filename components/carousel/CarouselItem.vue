<script lang="ts" setup>
import { Heart, HeartOff } from 'lucide-vue-next';
import { POSTER_IMAGE } from '~/utils/constants/images';
import useWatchlistStore from '~/stores/watchlist';
import getWatchlistItemType from '~/utils/helpers/getWatchlistItemType';
import { Resource } from '~/utils/types';

type Props = {
  item: Resource;
  hrefType: 'movies' | 'tv';
};

const props = defineProps<Props>();

const store = useWatchlistStore();

const itemInWatchlist = computed(() => {
  return store.watchlist.find(
    (itemInList: Resource) => itemInList.id === props.item.id
  );
});

const title = props.item?.title ?? props.item?.name ?? '';
const watchlistItemType = getWatchlistItemType(props.item, props.hrefType);
const imageSrc = props.item.poster_path
  ? `${POSTER_IMAGE.W342}${props.item.poster_path}`
  : '/image_not_available.png';

const handleAddToWatchlistClick = (item: Resource) => {
  store.addToWatchlist(item, watchlistItemType);
};
</script>

<template>
  <NuxtLink
    :to="{ path: `/${hrefType}/${item.id}` }"
    class="relative rounded-md group"
  >
    <div
      class="snap-start w-[225px] h-[350px] flex-shrink-0 shadow-md shadow-white/20 rounded-md overflow-hidden relative"
    >
      <nuxt-img :src="imageSrc" :alt="title" class="w-full h-full" />
      <button
        type="button"
        class="absolute rounded-bl-xl top-0 p-2 -right-[100%] bg-pink-500/80 group-hover:-right-0 transition-all duration-300 ease-in-out z-10"
        @click.prevent="handleAddToWatchlistClick(item)"
      >
        <template v-if="itemInWatchlist">
          <HeartOff class="text-white" :size="24" />
        </template>
        <template v-else>
          <Heart class="text-white" :size="24" />
        </template>
      </button>
    </div>

    <div
      class="absolute top-0 bottom-0 left-0 right-0 transition-all duration-200 ease-in-out bg-black/20 group-hover:bg-black/50"
    ></div>
  </NuxtLink>
</template>