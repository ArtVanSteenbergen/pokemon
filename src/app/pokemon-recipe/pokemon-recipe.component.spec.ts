import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonRecipeComponent } from './pokemon-recipe.component';

describe('PokemonRecipeComponent', () => {
  let component: PokemonRecipeComponent;
  let fixture: ComponentFixture<PokemonRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonRecipeComponent]
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
