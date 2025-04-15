import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCountComponent } from './pokemon-count.component';

describe('PokemonServingsComponent', () => {
  let component: PokemonCountComponent;
  let fixture: ComponentFixture<PokemonCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
