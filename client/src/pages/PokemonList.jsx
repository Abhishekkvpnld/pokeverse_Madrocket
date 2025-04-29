import { useEffect, useState } from "react";
import { fetchAll } from "../api/Api";
import Navbar from '../components/Navbar';
import CardSection from '../components/CardSection';
import { allTypes } from "../data/constants";

const PokemonList = () => {

  const [data, setData] = useState([]);     
  const [filteredData, setFilteredData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const getPokemon = async () => {
      try {
        setLoading(true);
        const { data } = await fetchAll();
        setData(data?.results || []);
        setFilteredData(data?.results || []);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      } finally {
        setLoading(false);
      }
    };

    getPokemon();
  }, []);


  useEffect(() => {
    let filtered = data;

    // Search by Name
    if (search.trim()) {
      filtered = filtered?.filter((pokemon) =>
        pokemon?.name.toLowerCase().includes(search.toLowerCase())
      );
    }


    setFilteredData(filtered);
  }, [search, selectedType, data]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-xl text-gray-600">
        Loading Pokémon...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 bg-slate-100 min-h-[100vh]">
      <Navbar search={search} setSearch={setSearch} />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mx-5 mt-4 gap-4">
        <h1 className="text-2xl font-semibold text-gray-700">Explore All Pokémon Cards</h1>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          <option value="">All Types</option>
          {allTypes?.map((type, idx) => (
            <option key={idx} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <CardSection filterData={filteredData} selectedType={selectedType} />
    </div>
  );
};

export default PokemonList;
