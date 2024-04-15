const Header = () => {
  return (
    <header className="bg-[#8D1F18] text-white shadow-lg shadow-[#8D1F1820]">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 rounded-b-lg">
        <a href="/" className="text-2xl font-bold tracking-wide">Jueguitochorras</a>
        <ul className="flex gap-6">
          <li>
            <a href="/" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">About</a>
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
