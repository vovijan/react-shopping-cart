import {
	ADD_TO_CART,
	DELETE_TO_CART,
	A_Z, Z_A,
	IN_STOCK,
	OUT_STOCK,
	NAME_COMPANY_FILTER,
	RESET_FILTER
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
		case A_Z:
			return {
				...state,
				sort: "aZ"
			};
		case Z_A:
			return {
				...state,
				sort: "zA"
			};
    case IN_STOCK:
			return {
			  ...state,
				inStock: "inStock"
			};
    case OUT_STOCK:
      return {
        ...state,
	      inStock: "outStock"
      };
		case NAME_COMPANY_FILTER:
			return {
				...state,
				filterByCompany: action.payload.names
			};
		case RESET_FILTER:
			return {
				...state,
				filterByCompany: '',
				sort: '',
				inStock: ''
			};
		default:
			return state;
	}
};
