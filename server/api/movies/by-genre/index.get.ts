import { getByGenre, getGenres } from '../../../../utils/api';
import { MoviesByGenreResponse } from '../../../../utils/types';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const [movies, genres] = await Promise.all([
    getByGenre(
      'movie',
      query?.id as string,
      Number(query?.page as string) ?? 1
    ),
    getGenres('movie'),
  ]);

  return {
    movies,
    genres: genres.genres,
  } as MoviesByGenreResponse;
});
