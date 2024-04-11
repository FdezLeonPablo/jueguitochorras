interface CatProps {
    src: string;
    isSelected: boolean;
    isFound: boolean;
    onClick: () => void;
  }
  
  const Cat: React.FC<CatProps> = ({ src, isSelected, isFound, onClick }) => {
    const cardClassName = `cat-card ${isSelected || isFound ? 'brightness-125' : 'brightness-75'} ${isFound ? 'ring ring-green-500' : ''}`;
    return (
        <div className={cardClassName} onClick={onClick}>
          <img src={src} alt="A random cat" className="w-full h-full object-cover"/>
        </div>
      );
    };
  
  
  export default Cat;
  