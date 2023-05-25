import { getDetails, getSimilar } from '../../../utils/api';

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id as string;

  const [details, similar] = await Promise.all([
    getDetails('movie', id),
    getSimilar('movie', id),
  ]);

  return {
    details,
    similar,
  };
});
