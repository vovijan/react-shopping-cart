import React from 'react';
import Modal from 'react-responsive-modal';
import BasketContainer from "../../containers/BasketContainer";

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
		return (
			<>
				<button
					className='btn btn-lg basket__button'
					onClick={this.onOpenModal}
				/>
				<Modal open={open} onClose={this.onCloseModal} center>
					<BasketContainer />
				</Modal>
			</>
		)
	}
};