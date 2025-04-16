import { Component, Input } from '@angular/core';

export interface Ingredient {
  amount: number;
  unit: string;
  ingredient: string;
};

export type Ingredients = Ingredient[];

@Component({
  selector: 'app-pokemon-ingredients',
  imports: [],
  templateUrl: './pokemon-ingredients.component.html',
  styleUrl: './pokemon-ingredients.component.scss'
})
export class PokemonIngredientsComponent {
  @Input() ingredients!: Ingredients;
}
