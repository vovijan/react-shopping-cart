import React from 'react';
import ListItem from "./ListItem";

import './styleComponents.css';

const ProductList = (props) => {
	return (
		<>
			<ul>
				{
					props.products.map(product => {
						return <ListItem
										key={product.id}
										products={product}
										addToCart={props.addToCart}
									/>
					})
				}
			</ul>
		</>
	)
};

export default ProductList;