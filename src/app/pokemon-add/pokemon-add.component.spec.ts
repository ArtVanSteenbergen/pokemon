import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { Location } from "@angular/common";
import { PokemonAddComponent } from './pokemon-add.component';
import { provideState, provideStore } from '@ngrx/store';
import { pokemonReducer } from '../ngrx/reducers/pokemon.reducer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideRouter, Router, RouterLink } from '@angular/router';
import { routes } from '../app.routes';

describe('PokemonAddComponent', () => {
  let component: PokemonAddComponent;
  let fixture: ComponentFixture<PokemonAddComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonAddComponent, FormsModule, CommonModule, RouterLink],
      providers: [
        provideRouter(routes), 
        provideStore(),
        provideState({name: 'pokemon', reducer: pokemonReducer })
      ]
    })
    .compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(PokemonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should reset the form after I submit it', () => {
    expect(component).toBeTruthy();

    const formElement = fixture.nativeElement.querySelector('form');
    const nameInput = formElement.querySelector('input[name="name"]');
    const abilityInput = formElement.querySelector('input[name="ability"]');
    const submitButton = formElement.querySelector('button[type="submit"]');
    
    nameInput.value = 'pikachu';
    abilityInput.value = 'thunderbolt';
    nameInput.dispatchEvent(new Event('input'));
    abilityInput.dispatchEvent(new Event('input'));

    submitButton.click();

    expect(nameInput.value).toBe('');
    expect(abilityInput.value).toBe('');

  });

  it('should not reset the form after I submit it if my form is invalid when i only enter 3 characters for the name', () => {
    expect(component).toBeTruthy();

    const formElement = fixture.nativeElement.querySelector('form');
    const nameInput = formElement.querySelector('input[name="name"]');
    const abilityInput = formElement.querySelector('input[name="ability"]');
    const submitButton = formElement.querySelector('button[type="submit"]');
    
    nameInput.value = 'abc';
    abilityInput.value = 'thunderbolt';
    nameInput.dispatchEvent(new Event('input'));
    abilityInput.dispatchEvent(new Event('input'));

    submitButton.click();

    expect(nameInput.value).toBe('abc');
    expect(abilityInput.value).toBe('thunderbolt');

  });

  it('should navigate to counter on click', () => {
    expect(component).toBeTruthy();

    const formElement = fixture.nativeElement.querySelector('form');
    const nameInput = formElement.querySelector('input[name="name"]');
    const abilityInput = formElement.querySelector('input[name="ability"]');
    const submitButton = formElement.querySelector('button[type="submit"]');
    
    nameInput.value = 'pikachu';
    abilityInput.value = 'thunderbolt';
    nameInput.dispatchEvent(new Event('input'));
    abilityInput.dispatchEvent(new Event('input'));

    submitButton.click();

    expect(nameInput.value).toBe('');
    expect(abilityInput.value).toBe('');

  });
  
  it('navigate to "" redirects you to /pokemon', fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/pokemon");
    });
  }));

  it('navigate to "/count-pokemon" redirects you to /count-pokemon', fakeAsync(() => {
    router.navigate(["/count-pokemon"]).then(() => {
      expect(location.path()).toBe("/count-pokemon");
    });
  }));
});
