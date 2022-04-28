import React from 'react';
import PokemonData from '../components/PokemonData';
import Search from '../components/Search';
import { fetchPokemon } from '../services/getPokemon';

export default function HomePage(){

    const [pokemon, setPokemon] = React.useState();
    const [loading, setLoading] = React.useState(false);

    const getPokemon = async (query) =>{
        setLoading(true);
        const response = await fetchPokemon(query);
        const results = await response.json();
        console.log(results);
        setPokemon(results);
        setLoading(false);
    }

    return (
        <div>
            <Search getPokemon={getPokemon}/>
            {!loading && pokemon ?(
                <PokemonData 
                    name={pokemon.name}
                    sprite={pokemon.sprites.front_default}
                    abilities={pokemon.abilities}
                    stats={pokemon.stats}
                    types={pokemon.types}
                    />
            ): null}
        </div>
    )
}