import React from 'react';
import { connect } from 'react-redux';
import Basket from "../components/modal/Basket";
import { addToCart } from '../redux/actions';

const mapStateToProps = state => ({
	products: state.cart
});

const mapDispatchToProps = dispatch => ({
	addToCart: (name) => {
		dispatch(addToCart( name ));
	}
});

const BasketContainer = ({ products }) => <Basket goods={products} addToCart={addToCart}/>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BasketContainer);