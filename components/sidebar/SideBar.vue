<script lang="ts" setup>
import BaseLogo from '../logo/BaseLogo.vue';
import ThemeSwitcher from '../theme-switcher/ThemeSwitcher.vue';
import SideBarNav from './SideBarNav.vue';
</script>

<template>
  <div
    class="fixed z-10 lg:z-0 lg:top-0 bottom-0 left-0 right-0 lg:w-[100px] h-[70px] lg:h-full lg:border-r lg:border-pink-500/30 bg-zinc-800 lg:bg-transparent"
  >
    <div
      class="flex flex-row items-center justify-center h-full lg:pt-6 lg:flex-col"
    >
      <div class="hidden lg:block">
        <BaseLogo />
      </div>
      <ClientOnly>
        <div class="mt-6">
          <ThemeSwitcher />
        </div>
      </ClientOnly>

      <SideBarNav />
    </div>
  </div>
</template>
