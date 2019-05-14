import React from 'react';
import { connect } from 'react-redux';
import Basket from "../components/modal/Basket";
import { deleteToCart, checkOut } from "../redux/actions";

const mapStateToProps = state => ({
	cart: state.cart
});

const mapDispatchToProps = dispatch => ({
	deleteToCart: (id) => {
		dispatch(deleteToCart({id}));
	},

	checkOut: (totalQuality) => {
		console.log(totalQuality);
		dispatch(checkOut({totalQuality}));
	}
});

const BasketContainer = ({ cart, deleteToCart, checkOut }) =>
	<Basket
		goods={cart}
		deleteToCart={deleteToCart}
		checkOut={checkOut}
	/>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BasketContainer);
