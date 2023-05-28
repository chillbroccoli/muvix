<script lang="ts" setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

type Props = {
  currentPage?: number;
  totalPages?: number;
};

type Emits = {
  (e: 'goToNextPage'): void;
  (e: 'goToPreviousPage'): void;
};

defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
  <div className="flex items-center justify-between mt-4 px-8 p-4">
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="cursor-pointer rounded-md border border-pink-600/60 bg-pink-600 dark:bg-pink-600/50 py-1.5  px-3 text-gray-200 hover:bg-pink-600/80 dark:hover:bg-pink-600/20 disabled:cursor-not-allowed disabled:bg-pink-800 dark:disabled:bg-pink-600/20"
        :disabled="currentPage === 1"
        @click="emit('goToPreviousPage')"
      >
        <ChevronLeft :size="20" />
      </button>
      <button
        type="button"
        className="cursor-pointer rounded-md border border-pink-600/60 bg-pink-600 dark:bg-pink-600/50 py-1.5 px-3 text-gray-200 hover:bg-pink-600/80 dark:hover:bg-pink-600/20 disabled:cursor-not-allowed disabled:bg-pink-800 dark:disabled:bg-pink-600/20"
        :disabled="currentPage === totalPages"
        @click="emit('goToNextPage')"
      >
        <ChevronRight :size="20" />
      </button>
    </div>
    <span className="flex items-center gap-1">
      <div>Page</div>
      <strong> {{ currentPage }} of {{ totalPages }} </strong>
    </span>
  </div>
</template>
