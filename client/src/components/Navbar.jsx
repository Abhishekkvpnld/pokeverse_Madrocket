import { IoSearchOutline } from "react-icons/io5";
import ImageCard from "./ImageCard";

const Navbar = ({ search, setSearch }) => {


  return (
    <nav className="w-full flex justify-between items-center p-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg sticky top-0 z-50">
      {/* Logo */}
      <ImageCard />

      {/* Search Form */}
      <form
        className="flex items-center bg-white rounded-full px-3 py-1 shadow-md transition-all focus-within:ring-2 focus-within:ring-pink-300"
      >
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none px-3 py-2 w-36 md:w-64 text-gray-700 placeholder-gray-400 bg-transparent focus:w-48 md:focus:w-80 transition-all duration-300"
        />
        <button type="submit" className="p-2 hover:bg-pink-100 rounded-full transition">
          <IoSearchOutline className="text-pink-500 hover:scale-110 transition-transform" size={24} />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
