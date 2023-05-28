<script lang="ts" setup>
import { POSTER_IMAGE } from '~/utils/constants/images';
import { Resource, TvShowDetails } from '~/utils/types';

import TvShowDetailsInfo from './TvShowDetailsInfo.vue';
import BaseCarousel from '../carousel/BaseCarousel.vue';

const props = defineProps<{ item: TvShowDetails; similar: Resource[] }>();

const imageSrc = `${POSTER_IMAGE.W342}${props.item?.poster_path}`;
</script>

<template>
  <div class="p-10 pt-8 lg:pt-16">
    <div class="flex flex-col lg:space-x-12 lg:flex-row">
      <div class="relative overflow-hidden border-2 border-gray-700 rounded-md">
        <nuxt-img
          :src="imageSrc"
          :alt="item.name"
          class="transition-all duration-200 ease-in-out group-hover:scale-110 h-[450px] w-full lg:w-fit lg:min-w-[350px]"
        />
      </div>
      <TvShowDetailsInfo :item="item" />
    </div>

    <div class="pt-8">
      <h5 class="pb-4 text-3xl font-semibold tracking-tighter">
        Similar Tv Shows
      </h5>
      <BaseCarousel :items="similar" href-type="tv" />
    </div>
  </div>
</template>
