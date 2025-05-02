import { useState, useMemo } from "react";
import Card from "./Card";
import EmptyCard from "./EmptyCard";

const CardSection = ({ filterData, selectedTypes }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20);


    const filteredAndSortedData = useMemo(() => {
        let data = [...filterData];

        //filtering
        if (selectedTypes?.length > 0) {
            data = data.filter((pokemon) =>
                pokemon.details?.types?.some((t) =>
                    selectedTypes.includes(t?.type?.name)
                )
            );
        }

        return data;
    }, [filterData, selectedTypes]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredAndSortedData.slice(startIndex, startIndex + itemsPerPage);

    const isEmpty = !paginatedData || paginatedData.length === 0;

    return (
        <div className="m-4">

            <div className="flex flex-wrap justify-between items-center gap-4 mb-4 px-2">

                <div>
                    <label className="mr-2">Items per page:</label>
                    <select
                        className="border rounded px-2 py-1"
                        value={itemsPerPage}
                        onChange={(e) => {
                            setItemsPerPage(Number(e.target.value));
                            setCurrentPage(1);
                        }}
                    >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </select>
                </div>

                <div>
                    <label className="mr-2">Page:</label>
                    <select
                        className="border rounded px-2 py-1"
                        value={currentPage}
                        onChange={(e) => setCurrentPage(Number(e.target.value))}
                    >
                        {Array.from({ length: totalPages }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Cards */}
            {isEmpty ? (
                <EmptyCard />
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
                    {paginatedData.map((pokemon, index) => (
                        <Card data={pokemon} key={index} selectedType={selectedTypes} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CardSection;

