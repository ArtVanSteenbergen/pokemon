import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Pokemon {
  name: string;
  sprites: {front_default: string};
  cries: {latest: string}
  weight: number;
}
export interface Pokemons {
  results: {name: string, url: string}[];
  count: number;
}
@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  constructor(private http: HttpClient) {}

  getPokemon(id: number | string = 1): Observable<Pokemon | Pokemons>  {
    if (id === 0) {id = ''}
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+ id + '?limit=1025') as Observable<Pokemon>
  }
  
}