import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonRecipeComponent } from './pokemon-recipe/pokemon-recipe.component';

export const routes: Routes = [
    {path: '', component: PokemonListComponent},
    {path: 'id/:id', component: PokemonComponent},
    {path: 'recipe', component: PokemonRecipeComponent},
    {path: 'recipe/:weight', component: PokemonRecipeComponent}
];
