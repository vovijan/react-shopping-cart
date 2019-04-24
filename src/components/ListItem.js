import React from 'react';

const ListItem = (props) => {
	const { pic, name, color, price, company } = props.products;
	const colorProd = props.products.color;
	const styleProd = {
		color: colorProd
	};
	return (
		<li>
			<div className="card" style={{width: '18rem'}}>
				<img src={pic} className="card-img-top" alt="picture" />
				<div className="card-body">
					<h6 className="card-title">-{name}-</h6>
					<p className="card-text">{company}</p>
					<p className="card-text" style={styleProd}>{color}</p>
					<p className="card-text">${price}</p>
					<button className="btn btn-success">Добавить в Корзину</button>
				</div>
			</div>
		</li>
	);
};

export default ListItem;