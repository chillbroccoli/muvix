<script setup lang="ts">
import { BACKDROP_IMAGE } from '~/utils/constants/images';
import BREAKPOINTS from '~/utils/constants/breakpoints';
import { Resource } from '~/utils/types';
import trimLongText from '~/utils/helpers/trimLongText';
import { Star } from 'lucide-vue-next';

const props = defineProps<{ item: Resource }>();

const isSmallScreen = useMediaQuery(`(max-width: ${BREAKPOINTS.LG}px)`);

const imageSrc = `${BACKDROP_IMAGE.W1280}${props.item.backdrop_path}`;
const name = props.item?.title ?? props.item?.name ?? '';
</script>

<template>
  <div class="w-full h-[450px] lg:h-[650px] relative">
    <nuxt-img :src="imageSrc" :alt="name" class="h-full w-full brightness-50" />

    <div class="absolute top-0 bottom-0 left-0 right-0">
      <div class="flex flex-col items-start justify-center h-full px-12">
        <h2
          class="text-4xl font-semibold tracking-tight text-pink-100 dark:text-pink-200"
        >
          {{ name }}
        </h2>
        <div
          v-if="item.vote_average && item.vote_average > 0"
          class="flex items-end mt-4 space-x-2"
        >
          <Star class="fill-pink-500 stroke-pink-600" :size="24" />
          <span class="text-lg lg:text-sm font-light text-gray-100">
            {{ item.vote_average.toFixed(1) }} rating
          </span>

          <span class="text-lg lg:text-sm font-light text-gray-100">
            {{ item?.release_date ?? item?.first_air_date }}
          </span>
        </div>

        <p
          v-if="item?.overview"
          class="mt-4 max-w-full lg:max-w-[50%] font-light text-gray-100 lg:tracking-tighter"
        >
          {{ isSmallScreen ? trimLongText(item.overview, 250) : item.overview }}
        </p>
      </div>
    </div>
  </div>
</template>
