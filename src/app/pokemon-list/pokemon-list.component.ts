import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  imports: [RouterLink],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit {
constructor(private pokemonService: PokemonServiceService) {}
pokemons: any;
pokemonSubscription: any;

  getAllPokemon() {
    this.pokemonSubscription = 
    this.pokemonService.getPokemon(0)
    .subscribe((data: any) => {this.pokemons = data})
    }
    
    ngOnInit(): void {
     this.getAllPokemon();
    }
  }
