const CAT_API_ENDPOINT = 'https://api.thecatapi.com/v1/images/search?limit=1';

export async function fetchCat(apiKey: string) {
  const response = await fetch(CAT_API_ENDPOINT, {
    headers: {
      'x-api-key': apiKey,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data from TheCatAPI');
  }
  const data = await response.json();
  return data[0];
}
