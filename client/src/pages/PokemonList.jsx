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

        <div className="mx-5 my-2 flex items-center gap-3">
          <label className="text-gray-700 font-medium text-base">Filter by Type:</label>
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 pl-4 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              <option value="">All Types</option>
              {allTypes?.map((type, idx) => (
                <option key={idx} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
            {/* Down Arrow Icon */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

      </div>

      <CardSection filterData={filteredData} selectedType={selectedType} />
    </div>
  );
};

export default PokemonList;
