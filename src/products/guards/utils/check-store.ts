import { Observable } from 'rxjs/Observable';
import { tap, filter, take } from 'rxjs/operators';

import * as fromStore from '../../store';

import { Store } from '@ngrx/store';

export const checkPizzaLoaded = (store: Store<fromStore.ProductsState>): Observable<boolean> => {
  return store.select(fromStore.getPizzasLoaded).pipe(
    tap(loaded => {
      if (!loaded) {
        store.dispatch(new fromStore.LoadPizzas());
      }
    }),
    filter(loaded => loaded),
    take(1)
  );
};

export const checkToppingsLoaded = (store: Store<fromStore.ProductsState>): Observable<boolean> => {
  return store.select(fromStore.getToppingsLoaded).pipe(
    tap(loaded => {
      if (!loaded) {
        store.dispatch(new fromStore.LoadToppings());
      }
    }),
    filter(loaded => loaded),
    take(1)
  );
};
