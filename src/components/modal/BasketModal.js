import React from 'react';

import './Basket.css';

export default class BasketModal extends React.Component {

	render() {
		const totalPrice = this.props.goods.reduce((sum, current) => sum + current.price, 0);

		const totalQuality = this.props.goods.reduce((sum, current) => sum + current.num, 0);
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
								<button
									type="button"
									className="btn btn-outline-danger"
									onClick={() => this.props.deleteToCart(good.id)}
								>
									<i className="fas fa-ban"></i>
								</button>
							</li>
						})
					}
				</ul>
				<p>
					<span>TOTAL QUALITY: </span>
					<span className='price__color'>{ totalQuality } </span>
					<span>count</span>
				</p>
				<p>
					<span>SUBTOTAL: </span>
					<span className='price__color'>${ totalPrice }</span>
				</p>
				<button
					className="btn btn-outline-success btn-lg btn-block"
					onClick={() => {
						this.props.checkOut({totalQuality});
						totalQuality === 0 ? alert('Cart is empty!') : alert(`Order by $ ${ totalPrice } and ${ totalQuality } count created!`)
					}}
				>CHECKOUT</button>
			</>
		)
	}
};
