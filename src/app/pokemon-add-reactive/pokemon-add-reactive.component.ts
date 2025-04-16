import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { addPokemon } from '../ngrx/actions/pokemon.action';
import { CommonModule } from '@angular/common';
import { Pokemons } from '../pokemon-service.service';
import { RouterLink } from '@angular/router';

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
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './pokemon-add-reactive.component.html',
  styleUrl: './pokemon-add-reactive.component.scss'
})
export class PokemonAddReactiveComponent implements OnInit {
  pokemons$: Observable<Pokemons>
  
  constructor(private store: Store<{ pokemon: Pokemons}>) {
    this.pokemons$ = store.select('pokemon');
  }

  ngOnInit() {
    this.pokemons$.subscribe((data)=>{console.log(data)})
  }

  form = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3), mustContainPika]
    }),
    url: new FormControl('', {
      validators: [Validators.required ]
    })
  });


  get invalidName() {
    return (
      this.form.controls.name.touched && 
      this.form.controls.name.invalid
    )
  }
  get invalidUrl() {
    return (
      this.form.controls.url.touched && 
      this.form.controls.url.invalid
    )
  }

  get invalidForm() {
    return (
      this.invalidName && this.invalidUrl
    );
  }

  onSubmit() {
    if(this.form.invalid){
      return 
    }
    console.log(this.form.value.name)
    console.log(this.form.value.url)
    this.store.dispatch(
      addPokemon(
        {
          name: this.form.value.name as string, 
          url: this.form.value.url as string
        }
      )
    );
    this.form.reset();
  }
}
