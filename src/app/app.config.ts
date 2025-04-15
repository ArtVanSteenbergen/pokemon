import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer} from './ngrx/reducers/counter.reducer';
import { pokemonReducer } from './ngrx/reducers/pokemon.reducer';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideHttpClient(),
    provideStore(),
    provideState({name:'count', reducer: counterReducer}),
    provideState({name: 'pokemon', reducer: pokemonReducer }),
    //provideStore({count: counterReducer, pokemon, pokemonReducer})
  ]
};
