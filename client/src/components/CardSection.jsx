import Card from "./Card"


const CardSection = ({filterData}) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center m-4'>
            {
                filterData?.map((pokemon, index) => (
                    <Card data={pokemon} key={index} />
                ))
            }
        </div>
    )
}

export default CardSection;