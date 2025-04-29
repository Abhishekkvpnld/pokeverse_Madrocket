import Card from "./Card"


const CardSection = ({ filterData, selectedType }) => {

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center m-4'>
            {
                filterData?.map((pokemon, index) => (
                    <Card data={pokemon} key={index} selectedType={selectedType} />
                ))
            }
        </div>
    )
}

export default CardSection;