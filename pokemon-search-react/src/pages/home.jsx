import React from 'react';
import { Spinner } from 'react-bootstrap';
import PokemonData from '../components/PokemonData';
import Search from '../components/Search';
import { fetchPokemon } from '../services/getPokemon';

const spinnerStyle = {
    width: '10rem',
    height: '10rem',
    borderWidth: '1rem',
}

const spinnerWrapperStyle = {
    textAlign: 'center',
    marginTop: '50px',
}

export default function HomePage(){

    const [pokemon, setPokemon] = React.useState();
    const [loading, setLoading] = React.useState(false);

    const getPokemon = async (query) =>{
        setLoading(true);
        setTimeout( async() => {
            const response = await fetchPokemon(query);
            const results = await response.json();
            console.log(results);
            setPokemon(results);
            setLoading(false);
        }, 1500);
    }

    return (
        <div>
            <Search getPokemon={getPokemon}/>

            {loading ? (
                <div style={spinnerWrapperStyle}>
                    <Spinner style={spinnerStyle} animation="border"/>
                </div>
            ):null}
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