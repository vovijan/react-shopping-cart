import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import {addToCart} from "../redux/actions";

const mapStateToProps = state => {
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
				products: state.goods.filter(item => item.company === "Champlin Group")
			};
		case "Hammes Group":
			return {
				products: state.goods.filter(item => item.company === "Hammes Group")
			};
		case "Howell, Quigley and Rosenbaum":
			return {
				products: state.goods.filter(item => item.company === "Howell, Quigley and Rosenbaum")
			};
		case "Dicki - Langosh":
			return {
				products: state.goods.filter(item => item.company === "Dicki - Langosh")
			};
		case "Bartoletti and Sons":
			return {
				products: state.goods.filter(item => item.company === "Bartoletti and Sons")
			};
		case "Heathcote and Sons":
			return {
				products: state.goods.filter(item => item.company === "Heathcote and Sons")
			};
		case "Koelpin Group":
			return {
				products: state.goods.filter(item => item.company === "Koelpin Group")
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
