import { createReducer, on } from "@ngrx/store";
import { addPokemon, loadPokemonSuccess } from "../actions/pokemon.action";
import { Pokemons } from "../../pokemon-service.service";
    
export const initialPokemonState: Pokemons = {results: [], count: 0};

export const pokemonReducer = createReducer(
    initialPokemonState,
    on(loadPokemonSuccess, (state, { pokemon }) => pokemon),
    on(addPokemon, (state, { name, url }) => {
        // const newState = {...state}
        const newState = JSON.parse(JSON.stringify(state))
        console.log('before it is happening', newState.results)
        newState.results.unshift({name: name, url: url})
        console.log('it is happening', newState)
        localStorage.setItem('pokemonStore', JSON.stringify(newState));
        return newState}),
);

