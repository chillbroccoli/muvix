<template>
  <div>
    <button type="button" @click="handleError">Clear errors</button>
  </div>
</template>
<script lang="ts" setup>
import { NuxtError } from 'nuxt/app';

defineProps<{ error: NuxtError }>();

const handleError = () => clearError({ redirect: '/' });
</script>
