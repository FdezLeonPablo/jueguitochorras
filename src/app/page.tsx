'use client';

import React, { useEffect, useState } from 'react';
import Cat from './components/cat';
import { CatData, fetchCat } from './utils/fetchCat';

const backCardImage = 'assets/backCard.jpg'

const Page: React.FC = () => {
  const [catImages, setCatImages] = useState<CatData[]>([]);
  const [selectedCats, setSelectedCats] = useState<number[]>([]);
  const [foundPairs, setFoundPairs] = useState<number[]>([]);
  const [disableClick, setDisableClick] = useState(false);

  useEffect(() => {
    const getCatImages = async () => {
      const apiKey = process.env.CAT_API_KEY as string;
      try {
        const cats = await fetchCat(apiKey, 10);
        const duplicatedCats: CatData[] = [...cats, ...cats].sort(() => 0.5 - Math.random());
        setCatImages(duplicatedCats);

      } catch (error) {
        console.error('Failed to fetch cats', error);
      }
    };

    getCatImages();
  }, []);

  const handleCardClick = (index: number) => {
    if (disableClick || selectedCats.includes(index) || foundPairs.includes(index)) {
      return;
    }

    const newSelectedCats = [...selectedCats, index];
    setSelectedCats(newSelectedCats);

    if (newSelectedCats.length === 2) {
      checkForPair(newSelectedCats[0], newSelectedCats[1]);
    }

  };

  const checkForPair = (firstCatIndex: number, secondCatIndex: number) => {
    setDisableClick(true);

    if (catImages[firstCatIndex].url === catImages[secondCatIndex].url) {
      setFoundPairs((prev) => [...prev, firstCatIndex, secondCatIndex]);
      setSelectedCats([]);
      setDisableClick(false);
    } else {
      setTimeout(() => {
        setSelectedCats([]);
        setDisableClick(false);
      }, 1000);
    }
  };



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center mb-6">Cat Memory</h1>
      <div className='max-w-4xl mx-auto'>
        <div className="grid grid-cols-5 gap-x-2 gap-y-2">
          {catImages.length > 0 ? (
            catImages.map((cat, index) => (
              <Cat
                key={index}
                src={cat.url}
                backImageSrc={backCardImage}
                isSelected={selectedCats.includes(index)}
                isFound={foundPairs.includes(index)}
                onClick={() => handleCardClick(index)}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}

        </div>
      </div>
    </div>
  );
};

export default Page;

