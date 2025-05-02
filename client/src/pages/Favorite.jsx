import React from "react";
import { usePokemon } from "../context/PokeContext";
import Card from "../components/Card"; 
import EmptyCard from "../components/EmptyCard"; 
import Navbar from "../components/Navbar";

const Favorite = () => {
    const { favorites } = usePokemon();

    const isEmpty = favorites.length === 0;

    return (
        <>
            <Navbar />
            <div className="m-4">
                {isEmpty ? (
                    <EmptyCard message="No favorite Pokémon added yet." />
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
                        {favorites?.map((pokemon, index) => (
                            <Card key={index} data={pokemon} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Favorite;
