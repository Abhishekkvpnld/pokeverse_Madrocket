import { useEffect, useState } from "react";
import { fetchDetails } from "../api/Api";
import Stats from "../components/Stats";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPokemonDetails = async () => {
      setLoading(true);
      try {
        const { data } = await fetchDetails(name);
        setPokemonDetails(data);
      } catch (error) {
        console.error("Failed to fetch Pokémon details:", error);
      } finally {
        setLoading(false);
      }
    };
  
    if (name) {
      fetchPokemonDetails();
    }
  }, [name]);
  


  if (loading) return <p className="text-center mt-10 text-gray-600">Loading Pokémon...</p>;
  if (!pokemonDetails) return <p className="text-center mt-10 text-red-500">No data found.</p>;

  return (
    <div>
      <Navbar />
      <Stats pokemon={pokemonDetails} />;
    </div>
  )
};

export default PokemonDetail;
