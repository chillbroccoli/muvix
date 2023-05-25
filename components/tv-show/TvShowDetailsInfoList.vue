<script lang="ts" setup>
import { Star } from 'lucide-vue-next';
import convertTime from '~/utils/helpers/convertTime';
import getAverage from '~/utils/helpers/getAverage';
import { TvShowDetails } from '~/utils/types';

defineProps<{ item: TvShowDetails }>();
</script>

<template>
  <ul class="mt-6 space-y-2 font-light">
    <li class="flex items-center">
      <span class="w-[120px]">First Air Date</span>
      <span>{{ item.first_air_date }}</span>
    </li>
    <li
      v-if="item.vote_average && item.vote_average > 0"
      class="flex items-center"
    >
      <span class="w-[120px]">Rating</span>
      <div class="flex space-x-1">
        <Star class="fill-pink-500 stroke-pink-600" />
        <span>{{ item.vote_average.toFixed(1) }}</span>
      </div>
    </li>
    <li class="flex items-center">
      <span class="w-[120px]">Created By</span>
      <div class="flex space-x-1">
        <span v-for="(creator, index) in item.created_by" :key="creator.id">
          {{ creator.name }} {{ index < item.created_by.length - 1 ? ',' : '' }}
        </span>
      </div>
    </li>
    <li class="flex items-center">
      <span class="w-[120px]">Seasons</span>
      <span>{{ item.number_of_seasons }}</span>
    </li>
    <li class="flex items-center">
      <span class="w-[120px]">Episodes</span>
      <span>{{ item.number_of_episodes }}</span>
    </li>
    <li v-if="item.episode_run_time.length" class="flex items-center">
      <span class="w-[120px]">Runtime</span>
      <span>{{ convertTime(getAverage(item.episode_run_time)) }}</span>
    </li>
    <li class="flex items-center">
      <span class="min-w-[120px] w-fit overflow-hidden">Networks</span>
      <div class="flex flex-wrap space-x-1">
        <span v-for="(network, index) in item.networks" :key="network.id">
          {{ network.name }} {{ index < item.networks.length - 1 ? ',' : '' }}
        </span>
      </div>
    </li>
    <li class="flex items-center">
      <span class="min-w-[120px] w-fit overflow-hidden">Genres</span>
      <div class="flex flex-wrap space-x-1">
        <span v-for="(genre, index) in item.genres" :key="genre.id">
          {{ genre.name }} {{ index < item.genres.length - 1 ? ',' : '' }}
        </span>
      </div>
    </li>
    <li class="flex items-center">
      <span class="min-w-[120px] w-fit overflow-hidden">Languages</span>
      <div class="flex flex-wrap space-x-1">
        <span
          v-for="(language, index) in item.spoken_languages"
          :key="language.name"
        >
          {{ language.name }}
          {{ index < item.spoken_languages.length - 1 ? ',' : '' }}
        </span>
      </div>
    </li>
    <li class="flex items-center">
      <span class="w-[120px]">Status</span>
      <span>{{ item.status }}</span>
    </li>
  </ul>
</template>
