import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import * as fromStore from '../store';


@Injectable()
export class PizzasGuard implements CanActivate {

  constructor(private store: Store<fromStore.ProductsState>) { }

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getPizzasLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadPizzas());
        }
      }),
      filter(loaded => loaded), // Only occurs if loaded is true because tap won't continue stream if not resolved
      take(1)
    );
  }
}
