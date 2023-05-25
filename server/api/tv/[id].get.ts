import { getDetails, getSimilar } from '../../../utils/api';

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id as string;

  const [details, similar] = await Promise.all([
    getDetails('tv', id),
    getSimilar('tv', id),
  ]);

  return {
    details,
    similar,
  };
});
