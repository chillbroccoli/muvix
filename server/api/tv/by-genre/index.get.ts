import { getByGenre, getGenres } from '../../../../utils/api';
import { TvShowsByGenreResponse } from '../../../../utils/types';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const [tvShows, genres] = await Promise.all([
    getByGenre('tv', query?.id as string, Number(query?.page as string) ?? 1),
    getGenres('tv'),
  ]);

  return {
    tvShows,
    genres: genres.genres,
  } as TvShowsByGenreResponse;
});
