import { createAction, props } from '@ngrx/store';
import { Pokemons } from '../../pokemon-service.service';

export const addPokemon = createAction('[Pokemon] Add', props<{ name: string; url: string }>());

export const loadPokemon = createAction('[Pokemon] Load Pokemon');
export const loadPokemonSuccess = createAction('[Pokemon] Load Pokemon Success', props<{ pokemon: Pokemons }>());
export const loadPokemonFailure = createAction('[Pokemon] Load Pokemon Failure', props<{ error: any }>());
