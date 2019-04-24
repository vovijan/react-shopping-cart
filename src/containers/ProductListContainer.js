import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList';

const mapStateToProps = state => ({
	products: state
});

const ProductListContainer = ({ products }) => <ProductList products={products}/>;

export default connect(
	mapStateToProps
)(ProductListContainer);