import { CiLocationArrow1 } from "react-icons/ci";

const CardData = ({ data, details }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-2 flex flex-col items-center transition-transform transform hover:scale-105">
            <div className="w-full h-[180px] flex justify-center items-center overflow-hidden rounded-xl">
                <img
                    src={details?.sprites?.front_default || "/pokemon2.jpeg"}
                    alt="Pokemon"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="w-full my-1 flex items-center justify-between px-2 mt-2">
                <h2 className="text-lg font-bold text-slate-800">{data?.name}</h2>
                <CiLocationArrow1
                    size={25}
                    title="Details"
                    className="hover:scale-110 hover:border-2 hover:border-blue-600 rounded-full border p-1 transition hover:text-red-700"
                />
            </div>
        </div>
    );
};

export default CardData;
