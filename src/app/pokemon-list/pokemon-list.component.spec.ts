import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListComponent } from './pokemon-list.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterLink } from '@angular/router';
import { routes } from '../app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { pokemonReducer } from '../ngrx/reducers/pokemon.reducer';
import { provideEffects } from '@ngrx/effects';
import { PokemonEffects } from '../ngrx/effects/getPokemon.effect';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonListComponent, RouterLink],
      providers: [
        provideHttpClient(), 
        provideRouter(routes),
        provideStore(),
        provideState({name: 'pokemon', reducer: pokemonReducer}),
        provideEffects(PokemonEffects)
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
