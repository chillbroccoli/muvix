import { multiSearch } from '../../../utils/api';
import { ListResponse, Resource } from '../../../utils/types';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  if (!query.q) return null;
  const data = await multiSearch(query.q as string);

  return {
    searchResults: data,
  } as {
    searchResults: ListResponse<Resource>;
  };
});
