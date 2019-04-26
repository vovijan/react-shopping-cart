import {ADD_TO_CART, DELETE_TO_CART} from "./constants";
import {data} from './data';

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
		default:
			return state;
	}
};