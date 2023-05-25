<script lang="ts" setup>
import { NuxtError } from 'nuxt/app';
import useSettingsStore from '~/stores/settings';

defineProps<{ error: NuxtError }>();

const store = useSettingsStore();

useServerHead({
  htmlAttrs: {
    class: store.isDark ? 'dark' : '',
  },
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div class="w-full h-full bg-gray-100 dark:bg-zinc-900">
    <template v-if="error.statusCode === 404">
      <div
        class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8"
      >
        <div class="text-center">
          <p class="text-base font-semibold text-pink-600">404</p>
          <h1
            class="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl"
          >
            Page not found
          </h1>
          <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <button
              type="button"
              class="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              @click="handleError"
            >
              Go back home
            </button>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div
        class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8"
      >
        <div class="text-center">
          <p class="text-base font-semibold text-pink-600">
            {{ error.statusCode }}
          </p>
          <h1
            class="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl"
          >
            Something went wrong
          </h1>
          <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
            {{ error.statusMessage }}
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <button
              type="button"
              class="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              @click="handleError"
            >
              Go back home
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
