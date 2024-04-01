  const Header = () => {
    return (
      <header className="bg-blue-600 text-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <a href="/" className="text-xl font-bold">Jueguitochorras</a>
          <ul className="flex gap-6">
            <li>
              <a href="/" className="hover:text-gray-200 transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-200 transition-colors">About</a>
            </li>
            {/* Add additional navigation links if needed */}
          </ul>
          <div>
            {/* Optional: Add buttons or search form here */}
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;
  