<script lang="ts" setup>
import ItemsList from '../list/ItemsList.vue';
import BaseLoader from '../loader/BaseLoader.vue';

const route = useRoute();

const searchQuery = ref(route.query?.q ?? '');
const debouncedQuery = refDebounced(searchQuery, 600);

const { data, pending } = await useAsyncData(
  'search',
  () =>
    $fetch('/api/search', {
      query: {
        q: debouncedQuery.value,
      },
    }),
  {
    watch: [debouncedQuery],
  }
);
</script>

<template>
  <div>
    <div class="p-0.5">
      <label for="query" class="sr-only">Search</label>
      <input
        id="query"
        v-model="searchQuery"
        type="text"
        name="query"
        class="block w-full px-6 py-4 text-lg dark:bg-zinc-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 focus:dark:ring-pink-500"
        placeholder="Search..."
      />
    </div>
    <div v-if="data?.searchResults?.results?.length">
      <ItemsList
        :items="data.searchResults.results"
        :title="`Search results for: ${debouncedQuery}`"
        default-display-mode="grid"
      />
    </div>
    <div
      v-if="!data?.searchResults?.results?.length && !pending"
      class="flex items-center justify-center p-2 py-8 font-light text-gray-400"
    >
      <p>Nothing has been found 😭</p>
    </div>
    <div v-if="pending">
      <BaseLoader />
    </div>
  </div>
</template>
