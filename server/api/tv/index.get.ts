import { getPopular, getTopRated, getTrending } from '../../../utils/api';
import { TvShowsResponse } from '../../../utils/types';

export default defineEventHandler(async () => {
  const [topRated, popular, trending] = await Promise.all([
    getTopRated('tv'),
    getPopular('tv'),
    getTrending('tv'),
  ]);

  return {
    topRated,
    popular,
    trending,
  } as TvShowsResponse;
});
