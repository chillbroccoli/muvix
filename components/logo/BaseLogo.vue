<script lang="ts" setup>
import logoColor from '~/assets/images/movix-color.png';
import logoBlack from '~/assets/images/movix-black.png';
import useSettingsStore from '~/stores/settings';

const store = useSettingsStore();

const logo = computed(() => {
  return store.isDark ? logoColor : logoBlack;
});
</script>

<template>
  <div class="relative w-16 h-16">
    <NuxtLink to="/">
      <img :src="logo" alt="Logo" />
    </NuxtLink>
  </div>
</template>
