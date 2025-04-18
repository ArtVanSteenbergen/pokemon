import { Component } from '@angular/core';
import { Pokemons } from '../pokemon-service.service';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  pokemons$: Observable<Pokemons>

    constructor(private store: Store<{ pokemon: Pokemons}>) {
        this.pokemons$ = this.store.select('pokemon');
    }
    
  }
