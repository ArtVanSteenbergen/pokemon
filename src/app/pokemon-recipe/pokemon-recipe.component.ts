import { Component, OnInit } from '@angular/core';
import { PokemonIngredientsComponent } from "../pokemon-ingredients/pokemon-ingredients.component";
import { PokemonServingsComponent } from "../pokemon-servings/pokemon-servings.component";
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-recipe',
  imports: [PokemonIngredientsComponent, PokemonServingsComponent, RouterLink],
  templateUrl: './pokemon-recipe.component.html',
  styleUrl: './pokemon-recipe.component.scss'
})
export class PokemonRecipeComponent implements OnInit {
  constructor(private actRoute: ActivatedRoute) {}
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

updatedIngredients: any = [];

ngOnInit(): void {
  if (this.actRoute.snapshot.params['weight']) {
    this.updateServings(Math.round(this.actRoute.snapshot.params['weight']/10));
    document.getElementsByTagName('input')[0].value = `${Math.round(this.actRoute.snapshot.params['weight']/10)}`
  } else {
    this.updateServings(1);
  }
}

updateServings(amount: any) {
  this.updatedIngredients = [];

  for (let ingredient of this.ingredients) {
    this.updatedIngredients.push({
      'amount': ingredient.amount * amount,
      'ingredient': ingredient.ingredient,
      'unit': (amount >= 2 ? ingredient.unit + 's' : ingredient.unit)})
  }
}

}
