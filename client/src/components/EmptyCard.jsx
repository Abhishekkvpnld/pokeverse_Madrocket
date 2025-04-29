

const EmptyCard = () => {
    return (
        <div className="w-full h-[300px] flex flex-col items-center justify-center text-center  rounded-xl p-6 animate-fade-in">
            <img
                src="/pokeball.png"
                alt="No Pokémon Found"
                className="w-20 animate-bounce h-20 mb-4 opacity-60 grayscale"
            />
            <h2 className="text-2xl font-bold text-indigo-600 mb-1">No Pokémon Here!</h2>
            <p className="text-sm text-gray-500">
                We couldn't find any Pokémon matching the selected type.
            </p>
        </div>
    )
}

export default EmptyCard