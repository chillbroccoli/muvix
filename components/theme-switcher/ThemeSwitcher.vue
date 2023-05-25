<script lang="ts" setup>
import { Sun, Moon } from 'lucide-vue-next';
import { Switch } from '@headlessui/vue';
import useSettingsStore from '~/stores/settings';

const store = useSettingsStore();
</script>

<template>
  <Switch
    v-model="store.isDark"
    :class="[
      store.isDark ? 'bg-pink-600' : 'bg-gray-300',
      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2',
    ]"
  >
    <span class="sr-only">Use setting</span>
    <span
      :class="[
        store.isDark ? 'translate-x-5' : 'translate-x-0',
        'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
      ]"
    >
      <span
        :class="[
          store.isDark
            ? 'opacity-0 duration-100 ease-out'
            : 'opacity-100 duration-200 ease-in',
          'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <Sun class="h-3 w-3 text-gray-400" />
      </span>
      <span
        :class="[
          store.isDark
            ? 'opacity-100 duration-200 ease-in'
            : 'opacity-0 duration-100 ease-out',
          'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <Moon class="h-3 w-3 text-pink-600" />
      </span>
    </span>
  </Switch>
</template>
