'use client'

import React, { useEffect, useState } from 'react';
import Cat from './components/Cat';
import { fetchCat } from './utils/fetchCat';

const Page: React.FC = () => {
  const [catSrc, setCatSrc] = useState('');

  useEffect(() => {
    const getCat = async () => {
      const apiKey = process.env.CAT_API_KEY as string; // Ensure your environment variable is loaded correctly
      const catData = await fetchCat(apiKey);
      setCatSrc(catData.url); // Assuming catData has a property 'url'
    };

    getCat();
  }, []);

  return (
    <div>
      <h1>Welcome to Jueguitochorras!</h1>
      {catSrc ? <Cat src={catSrc} /> : <p>Loading...</p>}
    </div>
  );
};

export default Page;