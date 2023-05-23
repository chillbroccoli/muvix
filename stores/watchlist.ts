import { HrefType, Resource } from '@/utils/types';

export type WatchlistItem = {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  resourceType: HrefType;
};

const useWatchlistStore = defineStore(
  'watchlist',
  () => {
    const watchlist = ref<WatchlistItem[]>([]);

    function addToWatchlist(item: Resource, hrefType: string) {
      const itemExists = watchlist.value.find(
        (itemInList: Resource) => itemInList.id === item.id
      );

      if (itemExists) {
        const filteredWatchlist = watchlist.value.filter(
          (itemInList: Resource) => itemInList.id !== item.id
        );

        watchlist.value = filteredWatchlist;
      } else {
        const newItem = {
          id: item.id,
          ...(item.title && { title: item.title }),
          ...(item.name && { name: item.name }),
          ...(item.poster_path && { poster_path: item.poster_path }),
          resourceType: hrefType === 'movies' ? 'movie' : 'tv',
        } as WatchlistItem;

        watchlist.value = [...watchlist.value, newItem];
      }
    }

    return { watchlist, addToWatchlist };
  },
  {
    persist: true,
  }
);

export default useWatchlistStore;
