<script lang="ts" setup>
import WatchlistView from '~/components/views/WatchlistView.vue';

const pageTitle = 'Movix | Watchlist';

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
