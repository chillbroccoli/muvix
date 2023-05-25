<script setup lang="ts">
import ViewToggle from '../view-toggle/ViewToggle.vue';
import ThemeSwitcher from '../theme-switcher/ThemeSwitcher.vue';
</script>

<template>
  <div className="pt-6 px-8 flex items-center justify-between">
    <ViewToggle />
    <ClientOnly>
      <div class="block lg:hidden">
        <ThemeSwitcher />
      </div>
    </ClientOnly>
  </div>
</template>
