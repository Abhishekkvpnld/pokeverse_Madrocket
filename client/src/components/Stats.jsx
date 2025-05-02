import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaBalanceScale } from "react-icons/fa";

const Stats = ({ pokemon }) => {
    const navigate = useNavigate();

    const handleCompare = () => {
        localStorage.setItem("comparePokemon", JSON.stringify(pokemon));
        navigate("/compare");
    };

    return (
        <div className="min-h-screen gap-3 bg-gray-100 flex flex-col items-center justify-center">
            <div className="w-full px-10 mt-2 flex items-center justify-between">
                <h1 className="text-2xl font-bold">Details</h1>
                <Link
                    to="/list"
                    className="flex gap-2 border px-2 py-1 rounded-2xl hover:scale-110 transition hover:underline hover:bg-amber-700 hover:text-white items-center"
                >
                    <FaArrowLeft /> Back
                </Link>
            </div>

            <div className="bg-white h-full p-6 rounded-xl shadow-lg w-[90%] text-center flex flex-col md:flex-row items-center">
                <div className="flex-1 flex justify-center flex-col items-center">
                    <img
                        src={pokemon?.sprites?.front_default || "/pokemon2.jpeg"}
                        alt={pokemon?.name}
                        width={150}
                        height={150}
                        className="w-full max-w-[400px] max-h-[400px] rounded-2xl"
                    />

                    <h1 className="text-2xl text-slate-600 font-bold mt-4">{pokemon?.name}</h1>

                    <button
                        onClick={handleCompare}
                        className="mt-3 flex items-center gap-2 justify-center px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition"
                    >
                        <FaBalanceScale size={20} /> Compare
                    </button>

                    <div className="mt-3 flex items-center justify-center gap-2">
                        <div className="text-gray-700 flex items-center gap-2">
                            <span className="font-bold text-blue-400">TYPES : </span>
                            {pokemon?.types?.map((data, index) => (
                                <div key={index} className="bg-red-200 px-3 py-1 rounded-lg text-sm">
                                    ⚡ {data?.type?.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="mt-3 flex flex-col items-start">
                        <h3 className="font-semibold">Abilities:</h3>
                        <div className="text-gray-700 flex items-center gap-2">
                            {pokemon?.abilities?.map((data, index) => (
                                <div key={index} className="bg-green-200 px-3 py-1 rounded-lg text-sm">
                                    ⚡ {data?.ability?.name}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4">
                        <h3 className="font-semibold text-lg mb-2">Stats</h3>
                        <div className="w-full rounded-2xl shadow-sm">
                            {pokemon?.stats?.map((statObj, index) => (
                                <div
                                    key={index}
                                    className="flex mt-2 bg-slate-300 rounded-2xl hover:bg-blue-500 hover:shadow-2xl items-center justify-between px-4"
                                >
                                    <p className="px-3 py-2 font-medium text-gray-700 hover:text-white">
                                        {statObj?.stat.name}
                                    </p>
                                    <p className="px-3 py-2 rounded-full bg-white text-gray-600">
                                        {statObj?.base_stat}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4">
                        <h3 className="font-semibold text-lg mb-2">Moves</h3>
                        <ul className="text-gray-700 flex flex-wrap justify-center gap-2">
                            {pokemon?.moves?.slice(0, 10).map((data, index) => (
                                <li key={index} className="bg-yellow-200 px-3 py-1 mt-1 rounded-lg text-sm">
                                    {data?.move?.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
