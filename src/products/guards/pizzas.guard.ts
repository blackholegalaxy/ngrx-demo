import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { switchMap, catchError } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import * as fromStore from '../store';
import * as fromGuardUtils from './utils';

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
    return fromGuardUtils.checkPizzaLoaded(this.store);
  }
}
