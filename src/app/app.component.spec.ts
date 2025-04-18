import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideState, provideStore } from '@ngrx/store';
import { pokemonReducer } from './ngrx/reducers/pokemon.reducer';
import { provideEffects } from '@ngrx/effects';
import { PokemonEffects } from './ngrx/effects/getPokemon.effect';
import { provideHttpClient } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers:[
        provideStore(),
        provideHttpClient(),
        provideState({name: 'pokemon', reducer: pokemonReducer}),
        provideEffects(PokemonEffects)
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'pokemon' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pokemon');
  });
});
