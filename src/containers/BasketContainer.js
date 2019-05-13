import React from 'react';
import { connect } from 'react-redux';
import Basket from "../components/modal/Basket";
import { deleteToCart } from "../redux/actions";

const mapStateToProps = state => ({
	cart: state.cart
});

const mapDispatchToProps = dispatch => ({
	deleteToCart: (id) => {
		dispatch(deleteToCart({id}));
	}
});

const BasketContainer = ({ cart, deleteToCart }) =>
	<Basket
		goods={cart}
		deleteToCart={deleteToCart}
	/>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BasketContainer);