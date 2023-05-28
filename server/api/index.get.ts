import { getTrending } from '../../utils/api';

export default defineEventHandler(async () => {
  const [movies, tv] = await Promise.all([
    getTrending('movie'),
    getTrending('tv'),
  ]);

  return {
    movies,
    tv,
  };
});
