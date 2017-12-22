import * as fromPizzas from './pizzas.actions';
import { Pizza } from 'src/products/models/pizza.model';

const EXPECTED_PIZZAS_PAYLOAD: Pizza[] = [
  {
    id: 1,
    name: 'Pizza 1',
    toppings: [{ id: 1, name: 'topping 1' }]
  } as Pizza,
  {
    id: 2,
    name: 'Pizza 2',
    toppings: [{ id: 1, name: 'topping 1' }, { id: 2, name: 'topping 2' }]
  } as Pizza
];

describe('Pizzas Actions', () => {
  describe('LoadPizzas Actions', () => {
    describe('LoadPizzas', () => {
      it('should create an action', () => {
        const action = new fromPizzas.LoadPizzas();

        // Spread to avoid "Expected object to be kind of Object but was LoadPizzas" error
        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS
        });
      });
    });

    describe('LoadPizzasFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromPizzas.LoadPizzasFail(payload);

        // Spread to avoid "Expected object to be kind of Object but was LoadPizzas" error
        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS_FAIL,
          payload
        });
      });
    });

    describe('LoadPizzasSuccess', () => {
      it('should create an action', () => {
        const action = new fromPizzas.LoadPizzasSuccess(EXPECTED_PIZZAS_PAYLOAD);

        // Spread to avoid "Expected object to be kind of Object but was LoadPizzas" error
        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS_SUCCESS,
          payload: EXPECTED_PIZZAS_PAYLOAD
        });
      });
    });
  });
  describe('CreatePizza Actions', () => {
    describe('CreatePizza', () => {
      it('should create an action', () => {
        const payload = {
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = new fromPizzas.CreatePizza(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.CREATE_PIZZA,
          payload,
        });
      });
    });

    describe('CreatePizzaFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Create Error' };
        const action = new fromPizzas.CreatePizzaFail(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.CREATE_PIZZA_FAIL,
          payload,
        });
      });
    });

    describe('CreatePizzaSuccess', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = new fromPizzas.CreatePizzaSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.CREATE_PIZZA_SUCCESS,
          payload,
        });
      });
    });
  });

  describe('UpdatePizza Actions', () => {
    describe('UpdatePizza', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = new fromPizzas.UpdatePizza(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.UPDATE_PIZZA,
          payload,
        });
      });
    });

    describe('UpdatePizzaFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Update Error' };
        const action = new fromPizzas.UpdatePizzaFail(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.UPDATE_PIZZA_FAIL,
          payload,
        });
      });
    });

    describe('UpdatePizzaSuccess', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = new fromPizzas.UpdatePizzaSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.UPDATE_PIZZA_SUCCESS,
          payload,
        });
      });
    });
  });

  describe('DeletePizza Actions', () => {
    describe('DeletePizza', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = new fromPizzas.DeletePizza(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.DELETE_PIZZA,
          payload,
        });
      });
    });

    describe('DeletePizzaFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Delete Error' };
        const action = new fromPizzas.DeletePizzaFail(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.DELETE_PIZZA_FAIL,
          payload,
        });
      });
    });

    describe('DeletePizzaSuccess', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = new fromPizzas.DeletePizzaSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromPizzas.DELETE_PIZZA_SUCCESS,
          payload,
        });
      });
    });
  });
});
