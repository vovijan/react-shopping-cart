import {
  ADD_TO_CART,
  DELETE_TO_CART,
  IN_STOCK,
  OUT_STOCK,
	NAME_COMPANY_FILTER
} from "./constants";
import { data } from './data';

const initialState = data;

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			let exist = false;
			let newCart = state.cart.map(item => {
				if (item.id === action.payload.id) {
					exist = true;
					return {
						...item,
						num: item.num + action.payload.num,
						price: item.price + action.payload.price
					}
				}
				return item;
			});
			if (exist) {
				return {
					...state,
					cart: newCart
				};
			}
			return {
				...state,
				cart: [
					...state.cart,
					{
						id: action.payload.id,
						name: action.payload.name,
						pic: action.payload.pic,
						price: action.payload.price,
						company: action.payload.company,
						num: action.payload.num
					}
				]
			};
		case DELETE_TO_CART:
			return {
				...state,
				cart: state.cart.filter(item => item.id !== action.payload.id)
			};
    case IN_STOCK:
			return {
			  ...state,
			  filter: "inStock"
			};
    case OUT_STOCK:
      return {
        ...state,
				filter: "outStock"
      };
		case NAME_COMPANY_FILTER:
			return {
				...state,
				filter: "nameCompany"
			};
		default:
			return state;
	}
};