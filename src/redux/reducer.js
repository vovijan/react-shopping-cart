import { ADD_TO_CART } from "./constants";
import {data} from './data';

const initialState = data;

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				...state,
				cart: [
					...state.cart,
					{
						id: action.payload.id,
						name: action.payload.name,
						pic: action.payload.pic,
						price: action.payload.price,
						company: action.payload.company
					}
				]
			};
		default:
			return state;
	}
};