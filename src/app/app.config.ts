import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer} from './ngrx/reducers/counter.reducer';
import { pokemonReducer } from './ngrx/reducers/pokemon.reducer';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { PokemonEffects } from './ngrx/effects/getPokemon.effect';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideHttpClient(),
    provideStore(),
    provideState({name:'count', reducer: counterReducer}),
    provideState({name: 'pokemon', reducer: pokemonReducer }),
    provideEffects(PokemonEffects)
    //provideStore({count: counterReducer, pokemon, pokemonReducer})
  ]
};
