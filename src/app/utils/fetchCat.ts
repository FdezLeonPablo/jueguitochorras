// Definiendo el tipo para los datos de los gatos
export interface CatData {
  id: string;
  url: string;
  width: number;
  height: number;
}

// Endpoint de la API
const CAT_API_ENDPOINT = 'https://api.thecatapi.com/v1/images/search';

// Función fetchCat modificada
export async function fetchCat(apiKey: string, limit: number): Promise<CatData[]> {
  const response = await fetch(`${CAT_API_ENDPOINT}?limit=${limit}`, {
    headers: {
      'x-api-key': apiKey,
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch data from TheCatAPI');
  }
  
  const data = await response.json();
  // Asegúrate de que la respuesta cumple con el tipo CatData[]
  return data.map((cat: any): CatData => ({
    id: cat.id,
    url: cat.url,
    width: cat.width,
    height: cat.height,
  }));
}
