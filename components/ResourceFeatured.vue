<script setup lang="ts">
import { BACKDROP_IMAGE } from '@/utils/constants/images';
import BREAKPOINTS from '@/utils/constants/breakpoints';
import { Resource } from '@/utils/types';
import trimLongText from '@/utils/helpers/trimLongText';
import { Star } from 'lucide-vue-next';

const props = defineProps<{ item: Resource }>();

const isSmallScreen = useMediaQuery(`(max-width: ${BREAKPOINTS.LG}px)`);

const imageSrc = `${BACKDROP_IMAGE.W1280}${props.item.backdrop_path}`;
const name = props.item?.title ?? props.item?.name ?? '';
</script>

<template>
  <div class="w-full h-[450px] lg:h-[650px] relative">
    <nuxt-img :src="imageSrc" :alt="name" class="h-full w-full" />

    <div class="absolute top-0 bottom-0 left-0 right-0 bg-black/70">
      <div class="flex flex-col items-start justify-center h-full px-12">
        <h2 class="text-4xl font-semibold tracking-tight">
          {{ name }}
        </h2>
        <div class="flex items-end mt-4 space-x-2">
          <Star class="text-pink-500" />
          <span
            v-if="item.vote_average"
            class="text-sm font-light text-gray-100"
          >
            {{ item.vote_average.toFixed(1) }} rating
          </span>

          <span class="text-sm font-light text-gray-100">
            {{ item?.release_date ?? item?.first_air_date }}
          </span>
        </div>

        <p
          v-if="item?.overview"
          class="mt-4 max-w-[75%] lg:max-w-[50%] text-sm lg:text-md font-light text-gray-100 lg:tracking-tighter"
        >
          {{ isSmallScreen ? trimLongText(item.overview, 250) : item.overview }}
        </p>
      </div>
    </div>
  </div>
</template>
