import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAddReactiveComponent } from './pokemon-add-reactive.component';
import { provideState, provideStore } from '@ngrx/store';
import { pokemonReducer } from '../ngrx/reducers/pokemon.reducer';
import { provideRouter } from '@angular/router';
import { routes } from '../app.routes';

describe('PokemonAddReactiveComponent', () => {
  let component: PokemonAddReactiveComponent;
  let fixture: ComponentFixture<PokemonAddReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonAddReactiveComponent],
      providers: [
        provideStore(),
        provideState({name: 'pokemon', reducer: pokemonReducer}),
        provideRouter(routes)
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonAddReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
