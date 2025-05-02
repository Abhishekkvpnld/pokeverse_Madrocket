import { allTypes } from "../data/constants";


const Filter = ({ setSelectedType, selectedType }) => {
    return (
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
    )
}

export default Filter