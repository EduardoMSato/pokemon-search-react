import { Alert } from 'react-bootstrap';
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
    const [error,setError] = React.useState(false);
    const [errorMsg,setErrorMsg] = React.useState('');

    const getPokemon = async (query) =>{
        if (!query) {
            setErrorMsg('Campo invalido.');
            setError(true);
            return;
        }
        setError(false);
        setLoading(true);
        setTimeout( async() => {
            try {
                const response = await fetchPokemon(query);
                const results = await response.json();
                console.log(results);
                setPokemon(results);
                setLoading(false);
            } catch(err){
                console.log(err);
                setLoading(false);
                setError(true);
                setErrorMsg('Nao foi possivel encontrar este pokemon, verifique a ortografia.');
            }
        }, 1500);
    }
    return (
        <div>
            {error ? (
                <Alert variant='danger'>
                    {errorMsg}
                </Alert>
            ): null}
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