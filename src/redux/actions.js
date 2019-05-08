import {
  ADD_TO_CART,
  DELETE_TO_CART,
  A_Z,
  Z_A,
  IN_STOCK,
  OUT_STOCK,
  NAME_COMPANY_FILTER,
	RESET_STOCK,
	RESET_SORT,
	RESET_ALL
} from './constants';

export const addToCart = payload => ({
	type: ADD_TO_CART,
	payload
});

export const deleteToCart = payload => ({
	type: DELETE_TO_CART,
	payload
});

export const aZ = payload => ({
  type: A_Z,
  payload
});

export const zA = payload => ({
  type: Z_A,
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

export const nameCompanyFilter = payload => ({
  type: NAME_COMPANY_FILTER,
  payload
});

export const resetStock = payload => ({
	type: RESET_STOCK,
	payload
});

export const resetSort = payload => ({
	type: RESET_SORT,
	payload
});

export const resetAll = payload => ({
	type: RESET_ALL,
	payload
});
