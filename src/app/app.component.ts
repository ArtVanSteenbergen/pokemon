import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { loadPokemon } from './ngrx/actions/pokemon.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'pokemon';
  
  constructor(private store: Store<{ pokemon: {name:string, ability:string}[] }>) {}

  ngOnInit() {
    this.store.dispatch(loadPokemon());
  }
  
}
