import {
  ADD_TO_CART,
  DELETE_TO_CART,
  IN_STOCK,
  OUT_STOCK
} from './constants';

export const addToCart = payload => ({
	type: ADD_TO_CART,
	payload
});

export const deleteToCart = payload => ({
	type: DELETE_TO_CART,
	payload
});

export const inStock = payload => ({
	type: IN_STOCK,
	payload
});

export const outStock = payload => ({
  type: OUT_STOCK,
  payload
});