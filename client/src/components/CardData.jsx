import { CiLocationArrow1 } from "react-icons/ci";

const CardData = ({ data, details }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-2 flex flex-col items-center transition-transform hover:scale-105">


            {/* Pokemon Name and ID */}
            <div className=" flex justify-between items-center w-full px-3">
                <h2 className="text-lg font-bold text-gray-800 capitalize">{data?.name}</h2>
                <div className="flex items-center justify-center gap-1">
                    <p className="font-bold text-gray-400">ID : </p>
                    <p className="text-sm border rounded-full flex items-center justify-center w-6 h-6 text-gray-500">{details?.id}</p>
                </div>
            </div>

            {/* Pokemon Image */}
            <div className="w-full h-[180px] flex justify-center items-center overflow-hidden rounded-xl bg-slate-50">
                <img
                    src={details?.sprites?.front_default || "/pokemon2.jpeg"}
                    alt={data?.name}
                    className="object-contain w-full h-full"
                />
            </div>


            {/* Pokemon Types */}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
                {details?.types?.map((typeInfo, idx) => (
                    <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-600 capitalize"
                    >
                        {typeInfo.type.name}
                    </span>
                ))}
            </div>

            {/* Action Button */}
            <div className="w-full flex justify-end mt-2 px-2">
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
