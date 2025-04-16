import { Component, OnInit } from '@angular/core';
import { Pokemon, Pokemons, PokemonServiceService } from '../pokemon-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-pokemon',
  imports: [RouterLink],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit {
  constructor(private pokemonService: PokemonServiceService, private actRoute: ActivatedRoute) {}
  
  id = 1;
  pokemon: Pokemon = {name: '', sprites: {front_default: ''}, cries: {latest :''}, weight: 0};
  pokemonSubscription!: Subscription;

  getPokemon() {
    this.id = parseInt(this.actRoute.snapshot.params['id']);
    this.pokemonSubscription = 
    this.pokemonService.getPokemon(this.id)
    .subscribe((data: Pokemons | Pokemon) => {
      this.pokemon = data as Pokemon
      const audioPlayer = document.querySelector('audio') as HTMLAudioElement;
      audioPlayer?.load();
    });
  }
  
  ngOnInit(): void {
    this.actRoute.params.subscribe(
      () => {
          this.getPokemon();
      }
    );
  }
  
}