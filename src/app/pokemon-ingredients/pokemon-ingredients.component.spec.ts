import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonIngredientsComponent } from './pokemon-ingredients.component';

describe('PokemonIngredientsComponent', () => {
  let component: PokemonIngredientsComponent;
  let fixture: ComponentFixture<PokemonIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonIngredientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
