import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonRecipeComponent } from './pokemon-recipe.component';
import { provideRouter, RouterLink } from '@angular/router';
import { routes } from '../app.routes';

describe('PokemonRecipeComponent', () => {
  let component: PokemonRecipeComponent;
  let fixture: ComponentFixture<PokemonRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonRecipeComponent, RouterLink],
      providers: [    
        provideRouter(routes)
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
