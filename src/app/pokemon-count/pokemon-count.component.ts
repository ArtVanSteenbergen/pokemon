import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../ngrx/actions/counter.action';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-count',
  imports: [CommonModule, RouterLink],
  templateUrl: './pokemon-count.component.html',
  styleUrl: './pokemon-count.component.scss'
})
export class PokemonCountComponent {
  count$: Observable<number>
  constructor(private store: Store<{ count: number }>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    // this.count$ = 1;
    this.count$ = store.select('count');
  }

  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }

  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());

  }

  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());

  }
}
