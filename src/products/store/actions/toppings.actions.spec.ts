import * as fromToppings from './toppings.actions';
import { Topping } from 'src/products/models/topping.model';

const EXPECTED_TOPPINGS_PAYLOAD: Topping[] = [
  {
    id: 1,
    name: 'Topping 1'
  } as Topping,
  {
    id: 2,
    name: 'Topping 2'
  } as Topping
];

describe('Pizzas Actions', () => {
  describe('LoadToppings Actions', () => {
    describe('LoadToppings', () => {
      it('should create an action', () => {
        const action = new fromToppings.LoadToppings();

        // Spread to avoid "Expected object to be kind of Object but was LoadToppings" error
        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS
        });
      });
    });

    describe('LoadToppingsFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromToppings.LoadToppingsFail(payload);

        // Spread to avoid "Expected object to be kind of Object but was LoadToppings" error
        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS_FAIL,
          payload
        });
      });
    });

    describe('LoadToppingsSuccess', () => {
      it('should create an action', () => {
        const action = new fromToppings.LoadToppingsSuccess(EXPECTED_TOPPINGS_PAYLOAD);

        // Spread to avoid "Expected object to be kind of Object but was LoadToppings" error
        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS_SUCCESS,
          payload: EXPECTED_TOPPINGS_PAYLOAD
        });
      });
    });

    describe('VisualiseToppings action', () => {
      describe('VisualiseToppings', () => {
        it('should create an action', () => {
          const action = new fromToppings.VisualiseToppings([1, 2, 3]);

          expect({ ...action }).toEqual({
            type: fromToppings.VISUALISE_TOPPINGS,
            payload: [1, 2, 3]
          });
        });
      });
    });
  });
});
