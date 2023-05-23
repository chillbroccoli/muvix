import { Resource } from '../types';

function getLinkHref(item: Resource, defaultHrefType: string) {
  switch (item.media_type) {
    case 'movie':
      return `/movies/${item.id}`;
    case 'tv':
      return `/tv/${item.id}`;
    default:
      return `/${defaultHrefType}/${item.id}`;
  }
}

export default getLinkHref;
