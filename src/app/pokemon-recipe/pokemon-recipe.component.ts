import { Component } from '@angular/core';
import { PokemonIngredientsComponent } from "../pokemon-ingredients/pokemon-ingredients.component";
import { PokemonServingsComponent } from "../pokemon-servings/pokemon-servings.component";

@Component({
  selector: 'app-pokemon-recipe',
  imports: [PokemonIngredientsComponent, PokemonServingsComponent],
  templateUrl: './pokemon-recipe.component.html',
  styleUrl: './pokemon-recipe.component.scss'
})
export class PokemonRecipeComponent {
  ingredients = [
    {
        "amount": 1,
        "unit": "cup",
        "ingredient": "mixed berries (strawberries, blueberries, raspberries)"
    },
    {
        "amount": 1,
        "unit": "cup",
        "ingredient": "flour"
    },
    {
        "amount": 0.5,
        "unit": "cup",
        "ingredient": "sugar"
    },
    {
        "amount": 0.5,
        "unit": "cup",
        "ingredient": "milk"
    },
    {
        "amount": 0.25,
        "unit": "cup",
        "ingredient": "melted butter"
    },
    {
        "amount": 1,
        "unit": "teaspoon",
        "ingredient": "baking powder"
    },
    {
        "amount": 0.5,
        "unit": "teaspoon",
        "ingredient": "vanilla extract"
    },
    {
        "amount": 1,
        "unit": "pinch",
        "ingredient": "salt"
    }
]
}
