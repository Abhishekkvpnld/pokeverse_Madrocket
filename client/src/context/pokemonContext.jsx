import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  const loadFavoritesFromLocalStorage = () => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return savedFavorites;
  };

  const [favorites, setFavorites] = useState(loadFavoritesFromLocalStorage());
  const [compareList, setCompareList] = useState([]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (pokemon) => {
    setFavorites((prev) => {
      const exists = prev.find((p) => p.name === pokemon.name);
      if (exists) {
        toast('This Pokémon is already in your favorites!', { icon: '⚡' });
        return prev;
      } else {
        toast.success(`${pokemon.name} added to favorites!`);
        return [...prev, pokemon];
      }
    });
  };

  const removeFromFavorites = (name) => {
    setFavorites((prev) => {
      const updatedFavorites = prev.filter((p) => p.name !== name);
      toast.success(`${name} removed from favorites!`);
      return updatedFavorites;
    });
  };

  const addToCompare = (pokemon) => {
    setCompareList((prev) => {
      const exists = prev.find((p) => p.name === pokemon.name);
      if (exists) {
        toast('This Pokémon is already in the compare list!', { icon: '⚡' });
        return prev;
      } else {
        toast.success(`${pokemon.name} added to compare list!`);
        return [...prev.slice(-1), pokemon];
      }
    });
  };

  const removeFromCompare = (name) => {
    setCompareList((prev) => {
      const updatedCompareList = prev.filter((p) => p.name !== name);
      toast.success(`${name} removed from compare list!`);
      return updatedCompareList;
    });
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemonDetails,
        setPokemonDetails,
        favorites,
        addToFavorites,
        removeFromFavorites,
        compareList,
        addToCompare,
        removeFromCompare,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

// Hook to use the context
export const usePokemon = () => useContext(PokemonContext);
