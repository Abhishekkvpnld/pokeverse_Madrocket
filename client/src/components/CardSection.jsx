import Card from "./Card";
import EmptyCard from "./EmptyCard";

const CardSection = ({ filterData, selectedType }) => {
    const isEmpty = !filterData || filterData.length === 0;

    return (
        <div className='m-4'>
            {isEmpty ? (
                <EmptyCard />
            ) : (
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center'>
                    {filterData.map((pokemon, index) => (
                        <Card data={pokemon} key={index} selectedType={selectedType} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CardSection;
