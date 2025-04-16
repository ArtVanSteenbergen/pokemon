import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonRecipeComponent } from './pokemon-recipe/pokemon-recipe.component';
import { PokemonAddComponent } from './pokemon-add/pokemon-add.component';
import { PokemonAddReactiveComponent } from './pokemon-add-reactive/pokemon-add-reactive.component';
import { PokemonCountComponent } from './pokemon-count/pokemon-count.component';

export const routes: Routes = [
    {path: '', redirectTo: 'pokemon', pathMatch: 'full'},
    {path: 'pokemon',  component: PokemonListComponent},
    {path: 'id/:id', component: PokemonComponent},
    {path: 'recipe', component: PokemonRecipeComponent},
    {path: 'recipe/:weight', component: PokemonRecipeComponent},
    {path: 'add-pokemon', component: PokemonAddComponent},
    {path: 'add-pokemon-reactive', component: PokemonAddReactiveComponent},
    {path: 'count-pokemon', component: PokemonCountComponent},
];
