import {
  getMoviesNowPlaying,
  getPopular,
  getTopRated,
} from '../../../utils/api';
import { MoviesResponse } from '../../../utils/types';

export default defineEventHandler(async () => {
  const [topRated, popular, nowPlaying] = await Promise.all([
    getTopRated('movie'),
    getPopular('movie'),
    getMoviesNowPlaying(),
  ]);

  return {
    topRated,
    popular,
    nowPlaying,
  } as MoviesResponse;
});
