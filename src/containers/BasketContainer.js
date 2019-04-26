import React from 'react';
import { connect } from 'react-redux';
import Basket from "../components/modal/Basket";

const mapStateToProps = state => ({

	cart: state.cart

});

const BasketContainer = ({ cart }) => <Basket goods={cart} />;

export default connect(
	mapStateToProps
)(BasketContainer);