import { Component, OnInit } from '@angular/core';
import { Pokemon, Pokemons, PokemonServiceService } from '../pokemon-service.service';
import { RouterLink } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
        this.pokemons$ = store.select('pokemon');
    }
    
  }
