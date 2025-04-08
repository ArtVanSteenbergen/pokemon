import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  constructor(private http: HttpClient) {}

  getPokemon(id: any = 1) {
    if (id === 0) {id = ''}
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+ id + '?limit=1025')
  }
  
}