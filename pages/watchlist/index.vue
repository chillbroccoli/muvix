<script lang="ts" setup>
import WatchlistView from '~/components/views/WatchlistView.vue';

const pageTitle = 'Muvix | Watchlist';

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
  <WatchlistView />
</template>
