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
    <div>
      <label for="query" class="sr-only">Search</label>
      <input
        id="query"
        v-model="searchQuery"
        type="text"
        name="query"
        class="block w-full px-6 py-4 text-lg text-gray-400 border-0 border-b-2 shadow-sm outline-none bg-zinc-800 border-b-zinc-600 placeholder:text-gray-400 placeholder:text-lg focus:ring-0 focus:border-b-pink-500"
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
