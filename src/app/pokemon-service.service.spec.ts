import { TestBed } from '@angular/core/testing';

import { PokemonServiceService } from './pokemon-service.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('PokemonServiceService', () => {
  let service: PokemonServiceService;
  let httpSpy: jasmine.SpyObj<HttpClient>;;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers:[     
        PokemonServiceService,
        { provide: HttpClient, useValue: httpSpy }
      ]
    });
    service = TestBed.inject(PokemonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the service with no value if an id of 0 is send', () => {
    httpSpy.get.and.returnValue(of({})); // Mock the return value
    service.getPokemon(0);
    expect(httpSpy.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/?limit=1025');
  });
  it('should call the service with 4', () => {
    httpSpy.get.and.returnValue(of({})); // Mock the return value
    service.getPokemon(4);
    expect(httpSpy.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/4?limit=1025');
  });
});
