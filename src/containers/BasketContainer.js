import React from 'react';
import { connect } from 'react-redux';
import BasketModal from '../components/modal/BasketModal';

const mapStateToProps = state => ({
	products: state.cart
});

const BasketContainer = ({ products }) => <BasketModal goods={products}/>;

export default connect(
	mapStateToProps
)(BasketContainer);