import {
  getGenres,
  getPopular,
  getTopRated,
  getTrending,
} from '../../../utils/api';

export default defineEventHandler(async () => {
  const [topRated, popular, trending, genres] = await Promise.all([
    getTopRated('tv'),
    getPopular('tv'),
    getTrending('tv'),
    getGenres('tv'),
  ]);

  return {
    topRated,
    popular,
    trending,
    genres: genres.genres,
  };
});
