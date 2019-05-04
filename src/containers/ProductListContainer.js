import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import {addToCart} from "../redux/actions";

const mapStateToProps = state => {

	/*let products = state.goods.sort((first, second) => {
		const nameA = first.name.toLowerCase();
		const nameB = second.name.toLowerCase();

		switch (state.sort) {
			case "aZ":
				if (nameA < nameB) {
					return -1;
				}
				return 0;
			default:
				if (nameA > nameB) {
					return -1;
				}
				return 0;
		}
	}).filter(item => item.company === state.filter);
	return {
		products
	};*/

	switch (state.filter) {
		case "aZ":
			return {
				products: [...state.goods].sort((first, second) => {
					const nameA = first.name.toLowerCase();
					const nameB = second.name.toLowerCase();
					console.log(nameA);
					if (nameA < nameB) {
						return -1;
					}
					return 0;
				})
			};
		case "zA":
			return {
				products: [...state.goods].sort((first, second) => {
					const nameA = first.name.toLowerCase();
					const nameB = second.name.toLowerCase();
					console.log(nameA);
					if (nameA > nameB) {
						return -1;
					}
					return 0;
				})
			};
		case "Champlin Group":
			return {
				products: state.goods.filter(item => item.company === state.filter)
			};
		case "Hammes Group":
			return {
				products: state.goods.filter(item => item.company === state.filter)
			};
		case "Howell, Quigley and Rosenbaum":
			return {
				products: state.goods.filter(item => item.company === state.filter)
			};
		case "Dicki - Langosh":
			return {
				products: state.goods.filter(item => item.company === state.filter)
			};
		case "Bartoletti and Sons":
			return {
				products: state.goods.filter(item => item.company === state.filter)
			};
		case "Heathcote and Sons":
			return {
				products: state.goods.filter(item => item.company === state.filter)
			};
		case "Koelpin Group":
			return {
				products: state.goods.filter(item => item.company === state.filter)
			};
		case "inStock":
			return {
				products: state.goods.filter(item => item.inStock)
			};
		case "outStock":
			return {
				products: state.goods.filter(item => !item.inStock)
			};
		default:
			return {products: state.goods}
	}
};

const mapDispatchToProps = dispatch => ({
	addToCart: (id, pic, name, price, company, num) => {
		dispatch(addToCart({id, pic, name, price, company, num}));
	}
});

const ProductListContainer = ({ products, addToCart }) =>
	<ProductList
		products={products}
		addToCart={addToCart}
	/>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductListContainer);
