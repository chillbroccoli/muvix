import {
  getGenres,
  getMoviesNowPlaying,
  getPopular,
  getTopRated,
} from '../../../utils/api';

export default defineEventHandler(async () => {
  const [topRated, popular, nowPlaying, genres] = await Promise.all([
    getTopRated('movie'),
    getPopular('movie'),
    getMoviesNowPlaying(),
    getGenres('movie'),
  ]);

  return {
    topRated,
    popular,
    nowPlaying,
    genres: genres.genres,
  };
});
