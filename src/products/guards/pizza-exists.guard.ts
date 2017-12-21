import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { tap, filter, take, map, switchMap, catchError } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import * as fromStore from '../store';
import * as fromGuardUtils from './utils';

import { Pizza } from '../models/pizza.model';
import { checkPizzaLoaded } from 'src/products/guards/utils/check-store';

@Injectable()
export class PizzaExistsGuard implements CanActivate {
  constructor(private store: Store<fromStore.ProductsState>) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = parseInt(route.params.pizzaId, 10);
        return this.hasPizza(id);
      })
    );
  }

  hasPizza(id: number): Observable<boolean> {
    return this.store.select(fromStore.getPizzasEntities).pipe(
      map((entities: { [key: number]: Pizza }) => !!entities[id]),
      take(1)
    );
  }

  // Load the pizza if it's hasn't been loaded
  // Guards are instanciated and doesn't not wait for async to be completed
  checkStore(): Observable<boolean> {
    return fromGuardUtils.checkPizzaLoaded(this.store);
  }
}
