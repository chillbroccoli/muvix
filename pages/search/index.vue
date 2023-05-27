<script lang="ts" setup>
import SearchView from '~/components/views/SearchView.vue';

const pageTitle = 'Muvix | Search';

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
});

useHead({
  title: pageTitle,
});
</script>

<template>
  <SearchView />
</template>
