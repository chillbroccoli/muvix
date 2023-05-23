<script lang="ts" setup>
import logo from '@/assets/images/movix-color.png';
</script>

<template>
  <div class="relative w-16 h-16">
    <NuxtLink to="/">
      <img :src="logo" alt="Logo" fill />
    </NuxtLink>
  </div>
</template>
