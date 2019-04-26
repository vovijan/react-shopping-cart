import React from 'react';

import './Basket.css';

export default class BasketModal extends React.Component {
	render() {
		const arr = this.props.goods.map(good => good.price);
		console.log(arr);
		const result = arr.reduce((sum, current) => sum + current, 0);
		return (
			<>
				<h1 style={{textAlign: 'center'}}>Cart</h1>
				<ul className='ul__style'>
					{
						this.props.goods.map(good => {
							return <li key={good.id} className='li__row'>
								<div className="card mb-3" style={{maxWidth: '500px'}}>
									<div className="row basket__row">
										<div className="col-md-4">
											<img src={good.pic} className="card-img" alt="Company product" />
										</div>
										<div className="col-md-8">
											<div className="card-body">
												<h6 className="card-title">-{good.name}-</h6>
												<p className="card-text">{good.company}</p>
												<p className="card-text">${good.price}</p>
												<p className="card-text">
													<small className="text-muted">Quantity: {good.num}</small>
												</p>
											</div>
										</div>
									</div>
								</div>
								<button type="button" className="btn btn-outline-danger" onClick={() => this.props.deleteToCart(good.id)}>
									<i className="fas fa-ban"></i>
								</button>
							</li>
						})
					}
				</ul>
				<p>
					<span>SUBTOTAL: </span>
					<span className='price__color'>${result}</span>
				</p>
				<button className="btn btn-outline-success btn-lg btn-block">CHECKOUT</button>
			</>
		)
	}
};