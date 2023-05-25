<script lang="ts" setup>
import { Star } from 'lucide-vue-next';
import { FALLBACK_IMAGE, POSTER_IMAGE } from '~/utils/constants/images';
import { Resource } from '~/utils/types';

type Props = {
  item: Resource;
  hrefType: 'movies' | 'tv';
};

const props = defineProps<Props>();

const title = props.item?.title ?? props.item?.name ?? '';
const imageSrc = props.item.poster_path
  ? `${POSTER_IMAGE.W342}${props.item.poster_path}`
  : FALLBACK_IMAGE;
</script>

<template>
  <NuxtLink
    :to="{ path: `/${hrefType}/${item.id}` }"
    class="relative rounded-md group"
  >
    <div
      class="snap-start w-[225px] h-[350px] flex-shrink-0 shadow-md shadow-white/20 rounded-md overflow-hidden relative"
    >
      <nuxt-img
        :src="imageSrc"
        :alt="title"
        class="w-full h-full transition-all duration-200 ease-in-out group-hover:scale-110 brightness-75"
      />
    </div>

    <div>
      <div class="flex flex-col py-2 space-y-1">
        <p class="text-sm font-semibold tracking-tighter">{{ title }}</p>

        <div v-if="item.vote_average" class="flex items-center">
          <template v-for="rating in [1, 2, 3, 4, 5]" :key="rating">
            <Star
              :class="[
                Math.floor(item.vote_average / 2) >= rating
                  ? 'fill-pink-400/50 dark:fill-pink-500'
                  : 'fill-pink-50 dark:fill-pink-200',
                'stroke-pink-600',
              ]"
              :size="18"
            />
          </template>
          <span
            v-if="item.vote_average && item.vote_average > 0"
            class="ml-1 text-sm font-light tracking-tighter"
          >
            {{ item.vote_average.toFixed(2) }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
