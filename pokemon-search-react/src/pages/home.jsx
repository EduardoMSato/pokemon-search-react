import React from 'react';
import Search from '../components/Search';
import { fetchPokemon } from '../services/getPokemon';

export default function HomePage(){

    const [pokemon, setPokemon] = React.useState();

    const getPokemon = async (query) =>{
        const response = await fetchPokemon(query);
        const results = await response.json();
        console.log(results);
    }

    return (
        <div>
            <Search getPokemon={getPokemon}/>
        </div>
    )
}