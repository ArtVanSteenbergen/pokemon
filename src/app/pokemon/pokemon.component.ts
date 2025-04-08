import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-pokemon',
  imports: [RouterLink],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit {
  constructor(private pokemonService: PokemonServiceService, private actRoute: ActivatedRoute) {}
  
  id: number = 1;
  pokemon: any;
  pokemonSubscription: any;

  getPokemon() {
    this.id = parseInt(this.actRoute.snapshot.params['id']);
    this.pokemonSubscription = 
    this.pokemonService.getPokemon(this.id)
    .subscribe((data: any) => {
      this.pokemon = data;
      const audioPlayer = document.querySelector('audio') as HTMLAudioElement;
      audioPlayer.load();
    });
  }
  
  ngOnInit(): void {
    this.actRoute.params.subscribe(
      params => {
          this.getPokemon();
      }
    );
  }
  
}