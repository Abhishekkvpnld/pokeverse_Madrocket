import { useEffect, useState } from "react";
import { fetchAll } from "../api/Api";
import Navbar from "../components/Navbar";
import CardSection from "../components/CardSection";
import Filter from "../components/Filter";
import Sort from "../components/Sort"; // 🔄 new component

const PokemonList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [sortBy, setSortBy] = useState(""); // 🔄 new state

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

    // Search
    if (search.trim()) {
      filtered = filtered?.filter((pokemon) =>
        pokemon?.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort
    if (sortBy === "name-asc") {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "id-asc") {
      filtered = [...filtered].sort((a, b) => a.url.split("/")[6] - b.url.split("/")[6]);
    } else if (sortBy === "id-desc") {
      filtered = [...filtered].sort((a, b) => b.url.split("/")[6] - a.url.split("/")[6]);
    }

    setFilteredData(filtered);
  }, [search, selectedType, sortBy, data]);

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
        <div className="flex flex-row sm:flex-col items-center justify-center gap-4">
          <Filter selectedType={selectedType} setSelectedType={setSelectedType} />
          <Sort sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </div>
      <CardSection filterData={filteredData} selectedType={selectedType} />
    </div>
  );
};

export default PokemonList;
