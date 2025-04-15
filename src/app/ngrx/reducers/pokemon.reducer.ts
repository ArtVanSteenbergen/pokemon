import { createReducer, on } from "@ngrx/store";
import { addPokemon } from "../actions/pokemon.action";


export function getInitialState(): {name: string, ability: string}[] {
    const savedState = localStorage.getItem('pokemonStore');
    return savedState ? JSON.parse(savedState) : [];
}

    
export const initialPokemonState: {name: string, ability: string}[] = getInitialState();

export const pokemonReducer = createReducer(initialPokemonState,
    on(addPokemon, (state, { name, ability }) => {
        const newState = [...state, {name, ability} ]
        localStorage.setItem('pokemonStore', JSON.stringify(newState));
        return newState}),
)