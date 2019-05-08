import React                        from 'react';
import { connect }                  from 'react-redux';
import ProductList                  from '../components/ProductList';
import { addToCart }                from "../redux/actions";
import { applyFilter, getSortFunc } from '../functions/SortFilter';

const mapStateToProps = state => ({

	products: applyFilter(state.goods, state.filterByCompany, state.inStock).sort(getSortFunc(state.sort))

});

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
