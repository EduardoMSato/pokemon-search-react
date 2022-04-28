import React from 'react';
import Search from '../components/Search';
import { fetchPokemon } from '../services/getPokemon';

export default function HomePage(){

    const [pokemon, setPokemon] = React.useState();
    const [loading, setLoading] = React.useState(false);

    const getPokemon = async (query) =>{
        setLoading(true);
        const response = await fetchPokemon(query);
        const results = await response.json();
        setPokemon(results);
        setLoading(false);
    }

    return (
        <div>
            <Search getPokemon={getPokemon}/>
            {!loading && pokemon ?(
                <div>
                    <h1>{pokemon.name}</h1>
                </div>
            ): null}
        </div>
    )
}