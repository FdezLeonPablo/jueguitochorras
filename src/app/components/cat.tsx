import React from "react";

interface CatProps {
  src: string;
  backImageSrc: string;
  isSelected: boolean;
  isFound: boolean;
  onClick: () => void;
}

// Componente Cat
const Cat: React.FC<CatProps> = ({ src, isSelected, isFound, onClick, backImageSrc }) => {
  const imageToShow = isSelected || isFound ? src : backImageSrc;
  return (
    <div className="w-full h-full p-1" onClick={onClick}>
      <div className="cat-card w-full h-full rounded overflow-hidden shadow-lg cursor-pointer">
        <img src={imageToShow} alt="A random cat" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};


export default Cat;
