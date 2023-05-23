<script setup lang="ts">
import { Star } from 'lucide-vue-next';
import { MovieDetails } from '~/utils/types';
import convertTime from '~/utils/helpers/convertTime';
import formatMoney from '~/utils/helpers/formatMoney';

defineProps<{ item: MovieDetails }>();
</script>

<template>
  <ul class="mt-6 space-y-2 font-light">
    <li class="flex items-center">
      <span class="w-[120px]">Released</span>
      <span>{{ item.release_date }}</span>
    </li>
    <li class="flex items-center">
      <span class="w-[120px]">Rating</span>
      <div class="flex space-x-1">
        <Star class="text-pink-500" />
        <span>{{ item.vote_average.toFixed(1) }}</span>
      </div>
    </li>
    <li class="flex items-center">
      <span class="w-[120px]">Runtime</span>
      <span>{{ convertTime(item.runtime) }}</span>
    </li>
    <li class="flex items-center">
      <span class="w-[120px]">Budget</span>
      <span>{{ formatMoney(item.budget) }}</span>
    </li>
    <li class="flex items-center">
      <span class="w-[120px]">Revenue</span>
      <span>{{ formatMoney(item.revenue) }}</span>
    </li>
    <li class="flex items-center">
      <span class="min-w-[120px] w-fit overflow-hidden">Genres</span>
      <div class="flex flex-wrap space-x-1">
        <span v-for="(genre, index) in item.genres" :key="genre.id">
          {{ genre.name }} {{ index < item.genres.length - 1 && ',' }}
        </span>
      </div>
    </li>
    <li class="flex items-center">
      <span class="min-w-[120px] w-fit overflow-hidden">Languages</span>
      <div class="flex space-x-1">
        <span
          v-for="(language, index) in item.spoken_languages"
          :key="language.name"
        >
          {{ language.name }}
          {{ index < item.spoken_languages.length - 1 && ',' }}
        </span>
      </div>
    </li>
    <li class="flex items-center">
      <span class="min-w-[120px] w-fit overflow-hidden">Production</span>
      <div class="flex flex-wrap space-x-1">
        <span
          v-for="(company, index) in item.production_companies"
          :key="company.id"
        >
          {{ company.name }}
          {{ index < item.production_companies.length - 1 && ',' }}
        </span>
      </div>
    </li>
  </ul>
</template>
