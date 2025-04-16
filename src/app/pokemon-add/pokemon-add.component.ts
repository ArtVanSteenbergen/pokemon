import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-pokemon-add',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './pokemon-add.component.html',
  styleUrl: './pokemon-add.component.scss'
})
export class PokemonAddComponent {
  count$: Observable<number>;
  
  constructor(private store: Store<{ count: number }>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    // this.count$ = 1;
    this.count$ = store.select('count');

  }

  submitForm(formData: NgForm){
    console.log('hello')
    if(formData.form.invalid){
      return ;
    }

    console.log(formData.form);
    console.log(formData.form.value)
    
    formData.form.reset();
  }

  checkValid(formdata: NgForm, inputString: string){
    if(formdata.form.controls[inputString].invalid && 
       formdata.form.controls[inputString].touched){
      return true
    }
    return false
  }
}
