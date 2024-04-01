import { NextApiRequest,NextApiResponse } from "next";
import { TheCatAPI } from "@thatapicompany/thecatapi";


if (typeof process.env.CAT_API_KEY !== 'string') {
    throw new Error('CAT_API_KEY must be defined');
  }
  
  const theCatAPI = new TheCatAPI(process.env.CAT_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const images = await theCatAPI.images.searchImages({ limit: 6 });
    res.status(200).json(images);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
}