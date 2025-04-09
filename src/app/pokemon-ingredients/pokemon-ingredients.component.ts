import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-ingredients',
  imports: [],
  templateUrl: './pokemon-ingredients.component.html',
  styleUrl: './pokemon-ingredients.component.scss'
})
export class PokemonIngredientsComponent {
  @Input() ingredients: any;
}
