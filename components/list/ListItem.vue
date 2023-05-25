<script setup lang="ts">
import { Star } from 'lucide-vue-next';
import { Resource } from '~/utils/types';
import { FALLBACK_IMAGE, POSTER_IMAGE } from '~/utils/constants/images';
import getLinkHref from '~/utils/helpers/getLinkHref';

const props = defineProps<{ item: Resource; hrefType: 'movies' | 'tv' }>();

const imageSrc = props.item.poster_path
  ? `${POSTER_IMAGE.W342}${props.item.poster_path}`
  : FALLBACK_IMAGE;

const title = props.item?.title ?? props.item?.name ?? '';
const linkHref = getLinkHref(props.item, props.hrefType);
</script>

<template>
  <NuxtLink :to="linkHref" class="group relative" :prefetch="false">
    <div>
      <div class="overflow-hidden border-2 border-pink-600/20 shadow-sm">
        <nuxt-img
          :src="imageSrc"
          :alt="title"
          class="transition-all duration-200 w-full h-[350px] ease-in-out group-hover:scale-110 brightness-75"
        />
      </div>
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
            class="text-sm font-light tracking-tighter ml-1"
          >
            {{ item.vote_average.toFixed(2) }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
