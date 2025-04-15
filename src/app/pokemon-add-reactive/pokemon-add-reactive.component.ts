import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { addPokemon } from '../ngrx/actions/pokemon.action';
import { CommonModule } from '@angular/common';

function mustContainPika(control: AbstractControl) {
  if(!control.value){
    return null;
  }
  if(control.value.includes('pika')){
    return null;
  }
  return {doesNotContainPika: true}
}

@Component({
  selector: 'app-pokemon-add-reactive',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './pokemon-add-reactive.component.html',
  styleUrl: './pokemon-add-reactive.component.scss'
})
export class PokemonAddReactiveComponent {
  pokemons$: Observable<{name:string, ability:string}[]>
  
  constructor(private store: Store<{ pokemon: {name:string, ability:string}[] }>) {
    this.pokemons$ = store.select('pokemon');
  }

  form = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3), mustContainPika]
    }),
    ability: new FormControl('', {
      validators: [Validators.required ]
    })
  });


  get invalidName() {
    return (
      this.form.controls.name.touched && 
      this.form.controls.name.invalid
    )
  }
  get invalidAbility() {
    return (
      this.form.controls.ability.touched && 
      this.form.controls.ability.invalid
    )
  }

  get invalidForm() {
    return (
      this.invalidName && this.invalidAbility
    );
  }

  onSubmit() {
    if(this.form.invalid){
      return 
    }
    console.log(this.form.value.name)
    console.log(this.form.value.ability)
    this.store.dispatch(
      addPokemon(
        {
          name: this.form.value.name as string, 
          ability: this.form.value.ability as string
        }
      )
    );
    this.form.reset();
  }
}
