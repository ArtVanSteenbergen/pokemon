import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCountComponent } from './pokemon-count.component';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from '../ngrx/reducers/counter.reducer';
import { CommonModule } from '@angular/common';
import { provideRouter, RouterLink } from '@angular/router';
import { routes } from '../app.routes';

describe('PokemonCountComponent', () => {
  let component: PokemonCountComponent;
  let fixture: ComponentFixture<PokemonCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCountComponent, CommonModule, RouterLink],
      providers: [
        provideRouter(routes), 
        provideStore(),
        provideState({name: 'count', reducer: counterReducer})
      ]
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
