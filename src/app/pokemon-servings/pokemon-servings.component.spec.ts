import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonServingsComponent } from './pokemon-servings.component';
import { provideRouter, RouterLink } from '@angular/router';
import { routes } from '../app.routes';

describe('PokemonServingsComponent', () => {
  let component: PokemonServingsComponent;
  let fixture: ComponentFixture<PokemonServingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonServingsComponent, RouterLink],
      providers: [    
        provideRouter(routes)
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonServingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
