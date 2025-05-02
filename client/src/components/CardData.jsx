import { CiLocationArrow1 } from "react-icons/ci";
import { FaBalanceScale, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext"; // adjust path as needed
import { useCallback, useMemo } from "react";
import toast from "react-hot-toast";

const CardData = ({ data, details }) => {
  const {
    favorites,
    addToFavorites,
    removeFromFavorites,
    addToCompare,
  } = usePokemon();

  // Memoize favorite status
  const isFavorite = useMemo(() => {
    return favorites.some((p) => p.name === data?.name);
  }, [favorites, data?.name]);

  // Handle toggle favorite
  const handleFavoriteClick = useCallback(() => {
    if (isFavorite) {
      removeFromFavorites(data.name);
      toast.error(`${data.name} removed from favorites`);
    } else {
      addToFavorites({ ...data, details });
      toast.success(`${data.name} added to favorites`);
    }
  }, [isFavorite, data, details, addToFavorites, removeFromFavorites]);

  // Handle compare
  const handleCompareClick = useCallback(() => {
    addToCompare({ ...data, details });
    toast.success(`${data.name} added to compare`);
  }, [data, details, addToCompare]);

  return (
    <div className="bg-white rounded-xl shadow-md p-2 w-full flex flex-col items-center transition-transform hover:scale-105">
      {/* Header */}
      <div className="flex justify-between items-center w-full px-3">
        <h2 className="text-lg font-bold text-gray-800 capitalize">{data?.name}</h2>
        <div className="flex items-center justify-center gap-1">
          <p className="font-bold text-gray-400">ID:</p>
          <p className="text-sm border rounded-full flex items-center justify-center w-6 h-6 text-gray-500">
            {details?.id}
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="w-full h-[180px] flex justify-center items-center overflow-hidden rounded-xl bg-slate-50">
        <img
          src={details?.sprites?.front_default || "/pokemon2.jpeg"}
          alt={data?.name}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Types */}
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {details?.types?.map((typeInfo, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-600 capitalize"
          >
            {typeInfo?.type?.name}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2 justify-end w-full px-4 py-2">
        {/* Favorite */}
        <button
          onClick={handleFavoriteClick}
          className={`transition ${isFavorite ? "text-red-500" : "text-black"} hover:text-yellow-300`}
          title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          aria-label="Toggle Favorite"
        >
          <FaHeart size={17} />
        </button>

        {/* Compare */}
        <button
          onClick={handleCompareClick}
          className="text-black hover:text-red-500 transition"
          title="Compare Pokémon"
          aria-label="Compare Pokémon"
        >
          <FaBalanceScale size={17} />
        </button>

        {/* Details */}
        <Link
          to={`/details/${data?.name}`}
          className="text-black hover:text-violet-500 transition"
          title="View Details"
          aria-label="View Details"
        >
          <CiLocationArrow1 size={17} />
        </Link>
      </div>
    </div>
  );
};

export default CardData;
