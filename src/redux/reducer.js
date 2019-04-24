import {data} from './data';

const initialState = data;

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};