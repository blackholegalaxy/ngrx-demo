import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as fromRoot from '../../../app/store';
import * as pizzasActions from '../actions/pizzas.actions'
import * as fromServices from '../../services';

@Injectable()
export class PizzasEffects {
  constructor(private actions$: Actions, private pizzasService: fromServices.PizzasService) { }

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzasActions.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzasService.getPizzas().pipe(
        map(pizzas => new pizzasActions.LoadPizzasSuccess(pizzas)),
        catchError(error => of(new pizzasActions.LoadPizzasFail(error)))
      );
    }));

  @Effect()
  createPizza$ = this.actions$.ofType(pizzasActions.CREATE_PIZZA).pipe(
    map((action: pizzasActions.CreatePizza) => action.payload),
    switchMap(pizza => {
      return this.pizzasService.createPizza(pizza).pipe(
        map(pizza => new pizzasActions.CreatePizzaSuccess(pizza)),
        catchError(error => of(new pizzasActions.CreatePizzaFail(error)))
      );
    }));

  @Effect()
  createPizzaSuccess$ = this.actions$.ofType(pizzasActions.CREATE_PIZZA_SUCCESS).pipe(
    map((action: pizzasActions.CreatePizzaSuccess) => action.payload),
    map(pizza => new fromRoot.Go({
      path: ['/products', pizza.id],
    }))
  );

  @Effect()
  updatePizza$ = this.actions$.ofType(pizzasActions.UPDATE_PIZZA).pipe(
    map((action: pizzasActions.UpdatePizza) => action.payload),
    switchMap(pizza => {
      return this.pizzasService.updatePizza(pizza).pipe(
        map(pizza => new pizzasActions.UpdatePizzaSuccess(pizza)),
        catchError(error => of(new pizzasActions.UpdatePizzaFail(error)))
      );
    }));

  @Effect()
  deletePizza$ = this.actions$.ofType(pizzasActions.DELETE_PIZZA).pipe(
    map((action: pizzasActions.DeletePizza) => action.payload),
    switchMap(pizza => {
      return this.pizzasService.deletePizza(pizza).pipe(
        map(() => new pizzasActions.DeletePizzaSuccess(pizza)),
        catchError(error => of(new pizzasActions.DeletePizzaFail(error)))
      );
    }));

  @Effect()
  handlePizzaSuccess$ = this.actions$.ofType(
    pizzasActions.UPDATE_PIZZA_SUCCESS,
    pizzasActions.DELETE_PIZZA_SUCCESS
  ).pipe(
    map(pizza => new fromRoot.Go({
      path: ['/products'],
    }))
    );
}
