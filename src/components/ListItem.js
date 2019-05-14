import React, { Component } from 'react';

import './styleComponents.css';

export default class ListItem extends Component {

	state = {
		num: 1
	};

	handleClick = () => {
		this.props.addToCart(
			this.props.products.id,
			this.props.products.pic,
			this.props.products.name,
			this.props.products.price,
			this.props.products.company,
			this.state.num
		);
	};

	render() {
		const {pic, name, color, price, company, inStock} = this.props.products;
		const colorProd = this.props.products.color;
		const styleProd = {
			color: colorProd
		};
		return (
			<li>
				<div className="card" style={{width: '18rem'}}>
					<img src={pic} className="card-img-top" alt="Company product"/>
					<div className="card-body text-center">
						<h6 className="card-title">-{name}-</h6>
						<p className="card-text">{company}</p>
						<p className="card-text" style={styleProd}>{color}</p>
						{
							inStock ? <button className="btn btn-success"
							                  onClick={this.handleClick}
								>
									${price}
								</button> :
								<button className="btn btn-outline-secondary" disabled>
									Out Stock
								</button>
						}
					</div>
				</div>
			</li>
		);
	}
};