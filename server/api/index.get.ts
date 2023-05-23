import { getTrending } from '../../utils/api';
import { HomeResponse } from '../../utils/types';

export default defineEventHandler(async () => {
  const [movies, tv] = await Promise.all([
    getTrending('movie'),
    getTrending('tv'),
  ]);

  return {
    movies,
    tv,
  } as HomeResponse;
});
