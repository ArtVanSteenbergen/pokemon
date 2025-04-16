import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-servings',
  imports: [],
  templateUrl: './pokemon-servings.component.html',
  styleUrl: './pokemon-servings.component.scss'
})
export class PokemonServingsComponent {

  @Output() updatedServings = new EventEmitter<number>();

  updateServings(event: Event) {
    this.updatedServings.emit(+(event.target as HTMLInputElement)?.value);
  }
}
