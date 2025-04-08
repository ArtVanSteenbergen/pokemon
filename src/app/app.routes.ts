import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

export const routes: Routes = [
    {path: '', component: PokemonListComponent},
    {path: 'id/:id', component: PokemonComponent}
];
