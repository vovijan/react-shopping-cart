import React from 'react';
import Modal from 'react-responsive-modal';
import BasketModal from "./BasketModal";

import './Basket.css';

export default class Basket extends React.Component {
	state = {
		open: false,
	};

	onOpenModal = () => {
		this.setState({open: true});
	};

	onCloseModal = () => {
		this.setState({open: false});
	};

	render() {
		const { open } = this.state;
		const arr = this.props.goods.map(good => good.num);
		const result = arr.reduce((sum, current) => sum + current, 0);
		return (
			<>
				<button
					className='btn btn-lg basket__button'
					onClick={this.onOpenModal}
				>
					<span className='button__color'>
						{
							result
						}
					</span>
				</button>
				<Modal open={open} onClose={this.onCloseModal} center>
					<BasketModal goods={this.props.goods} />
				</Modal>
			</>
		)
	}
};