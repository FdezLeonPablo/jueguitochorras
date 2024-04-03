interface CatProps {
    src: string;
  }
  
  const Cat: React.FC<CatProps> = ({ src }) => {
    return <img src={src} alt="A random cat" />;
  };
  
  export default Cat;
  