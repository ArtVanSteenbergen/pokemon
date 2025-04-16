import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonComponent } from './pokemon.component';
import { provideRouter, RouterLink } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from '../app.routes';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonComponent, RouterLink],
      providers: [  
        provideHttpClient(),
        provideRouter(routes), 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
