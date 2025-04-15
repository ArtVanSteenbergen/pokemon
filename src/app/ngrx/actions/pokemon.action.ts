import { createAction, props } from '@ngrx/store';

export const addPokemon = createAction('[Pokemon] Add', props<{ name: string; ability: string }>());