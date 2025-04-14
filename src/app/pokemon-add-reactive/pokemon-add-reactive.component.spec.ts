import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAddReactiveComponent } from './pokemon-add-reactive.component';

describe('PokemonServingsComponent', () => {
  let component: PokemonAddReactiveComponent;
  let fixture: ComponentFixture<PokemonAddReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonAddReactiveComponent]
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
