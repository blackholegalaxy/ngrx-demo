import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as pizzasActions from '../actions/pizzas.actions'
import * as fromServices from '../../services';

@Injectable()
export class PizzasEffects {
  constructor(private actions$: Actions, private pizzasService: fromServices.PizzasService) { }

  @Effect() // Option: {dispatch: false} to prevent dispatch action after effect
  loadPizzas$ = this.actions$.ofType(pizzasActions.LOAD_PIZZAS)
    .pipe(switchMap(() => {
      return this.pizzasService.getPizzas().pipe(
        map(pizzas => new pizzasActions.LoadPizzasSuccess(pizzas)),
        catchError(error => of(new pizzasActions.LoadPizzasFail(error)))
      );
    }));
}
