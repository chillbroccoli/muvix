<script setup lang="ts"></script>

<template>
  <div class="min-h-full bg-zinc-900 text-white">
    <SideBar />
    <div
      class="lg:w-[calc(100%_-_100px)] w-full lg:ml-[100px] h-full flex flex-col justify-between relative"
    >
      <main class="w-full">
        <slot />
      </main>
      <BaseFooter />
    </div>
  </div>
</template>
