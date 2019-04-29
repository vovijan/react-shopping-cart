import React from 'react';
import ListItem from "./ListItem";

import './styleComponents.css';

const ProductList = ({ products, addToCart }) => {
	return (
		<>
			<ul>
				{
					products.map(product => {
						return <ListItem
										key={product.id}
										products={product}
										addToCart={addToCart}
									/>
					})
				}
			</ul>
		</>
	)
};

export default ProductList;