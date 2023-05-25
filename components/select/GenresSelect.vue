<script lang="ts" setup>
import { Genre } from '~/utils/types';

defineProps<{ selected: string; genres: Genre[] }>();

const emit = defineEmits<{ (e: 'changeSelected', value: string): void }>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;

  emit('changeSelected', target.value);
};
</script>

<template>
  <div class="w-[250px] px-8 p-4">
    <label
      for="genre"
      class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
      >Genre</label
    >
    <select
      id="genre"
      class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 bg-gray-100 dark:bg-zinc-600 text-gray-900 dark:text-gray-200 ring-1 ring-inset ring-gray-300 dark:ring-gray-500 focus:ring-2 focus:ring-pink-600 focus:dark:ring-pink-600 sm:text-sm sm:leading-6"
      :value="selected"
      @input="handleChange"
    >
      <option disabled value="">Choose genre</option>
      <option v-for="item in genres" :key="item.id" :value="item.id">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>
