
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  map, mergeMap } from 'rxjs/operators';
import { loadPokemonSuccess, loadPokemon } from '../actions/pokemon.action';
import { Pokemons, PokemonServiceService } from '../../pokemon-service.service';

@Injectable()
export class PokemonEffects {
    private pokemonService = inject(PokemonServiceService);
    private actions$ = inject(Actions);

    loadPokemon$ = createEffect(() =>{
        return this.actions$.pipe(
            ofType(loadPokemon),
            mergeMap(() =>
                    this.pokemonService.getPokemon(0).pipe(
                        map(pokemon => {return loadPokemonSuccess({'pokemon': pokemon as Pokemons})})
                    )
                )
        )
    });
}
