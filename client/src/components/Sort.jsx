const Sort = ({ sortBy, setSortBy }) => {
    return (
      <div className="flex items-center gap-3">
        <label className="text-gray-700 font-medium text-base">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Default</option>
          <option value="name-asc">Name (A–Z)</option>
          <option value="name-desc">Name (Z–A)</option>
          <option value="id-asc">ID (Low–High)</option>
          <option value="id-desc">ID (High–Low)</option>
        </select>
      </div>
    );
  };
  
  export default Sort;
  