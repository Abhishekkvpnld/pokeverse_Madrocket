import { useEffect, useRef, useState } from "react";
import { fetchAll, fetchDetails } from "../api/Api";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Compare = () => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [allPokemon, setAllPokemon] = useState([]);
    const [secondPokemon, setSecondPokemon] = useState(null);
    const [loading, setLoading] = useState(true);


    const comparisonRef = useRef(null);


    // Load first Pokémon from localStorage
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("comparePokemon"));
        setSelectedPokemon(saved || null);
    }, []);


    useEffect(() => {
        const load = async () => {
            try {
                const { data } = await fetchAll();
                setAllPokemon(data?.results || []);
            } catch (error) {
                console.error("Error fetching Pokémon list:", error);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, []);

    // Handle selecting second Pokémon
    const handleSelectSecond = async (name) => {
        try {
            const { data } = await fetchDetails(name);
            setSecondPokemon(data);
            setTimeout(() => {
                comparisonRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } catch (error) {
            console.error("Error fetching second Pokémon:", error);
        }
    };
    

    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center text-xl text-gray-600">
                Loading Compare View...
            </div>
        );
    }

    return (
        <>

            <Navbar />
            <div className="min-h-screen bg-slate-100 p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold text-gray-700">Compare Pokémon</h1>
                    <Link
                        to="/list"
                        className="text-sm text-blue-600 hover:text-blue-800 transition"
                    >
                        ← Back to List
                    </Link>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Selected Pokémon */}
                    <div className="bg-white p-4 rounded-xl shadow-lg">
                        <h2 className="text-lg font-semibold text-gray-600 mb-2">Selected Pokémon</h2>
                        {selectedPokemon ? (
                            <div className="flex flex-col items-center">
                                <img
                                    src={selectedPokemon?.sprites?.front_default || "/pokemon2.jpeg"}
                                    alt={selectedPokemon?.name}
                                    className="w-32 h-32"
                                />
                                <h3 className="text-xl font-bold mt-2 capitalize">{selectedPokemon?.name}</h3>
                            </div>
                        ) : (
                            <p>No Pokémon selected for comparison.</p>
                        )}
                    </div>

                    {/* Select Second Pokémon */}
                    <div className="bg-white p-4 rounded-xl shadow-lg">
                        <h2 className="text-lg font-semibold text-gray-600 mb-2">Choose Pokémon to Compare</h2>
                        <div className="flex flex-wrap gap-2 max-h-[300px] overflow-y-auto">
                            {allPokemon?.map((poke) => (
                                <button
                                    key={poke?.name}
                                    className={`px-3 py-1 rounded-lg text-sm transition
                                  ${selectedPokemon?.name === poke?.name ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-100 text-blue-700 hover:bg-blue-300'}
                              `}
                                    onClick={() => handleSelectSecond(poke?.name)}
                                    disabled={selectedPokemon?.name === poke?.name}
                                >
                                    {poke?.name}
                                </button>

                            ))}
                        </div>
                    </div>
                </div>

                {/* Comparison Section */}
                {secondPokemon && (
                    <div ref={comparisonRef} className="mt-10 bg-white p-6 rounded-xl shadow-md">
                        <h2 className="text-xl font-bold text-center mb-6">Comparison Result</h2>
                        <div className="grid grid-cols-2 gap-6">
                            {[selectedPokemon, secondPokemon].map((poke, idx) => (
                                <div key={idx} className="flex flex-col items-center border rounded-lg p-4">
                                    <img
                                        src={poke?.sprites?.front_default || "/pokemon2.jpeg"}
                                        alt={poke?.name}
                                        className="w-28 h-28"
                                    />
                                    <h3 className="text-lg font-semibold mt-2 capitalize">{poke?.name}</h3>
                                    <div className="mt-2 text-sm text-gray-700">
                                        <p><strong>Type:</strong> {poke?.types?.map(t => t.type.name).join(", ")}</p>
                                        <p><strong>Abilities:</strong> {poke?.abilities?.map(a => a.ability.name).join(", ")}</p>
                                        <p><strong>Stats:</strong></p>
                                        <ul className="list-disc ml-5">
                                            {poke?.stats?.map((s, i) => (
                                                <li key={i}>{s.stat.name}: {s.base_stat}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Compare;
