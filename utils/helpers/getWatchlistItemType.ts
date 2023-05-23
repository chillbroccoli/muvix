import { Resource } from '../types';

function getWatchlistItemType(item: Resource, deaultItemType: string) {
  switch (item.media_type) {
    case 'movie':
      return 'movie';
    case 'tv':
      return 'tv';
    default:
      return `${deaultItemType}`;
  }
}

export default getWatchlistItemType;
