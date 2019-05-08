import React, { Component } from 'react';
import SearchCompany from "./SearchCompany";

import '../styleComponents.css';

export default class Sidebar extends Component {

	state = {
		isActive: false,
		selected: null
	};

	handleClick = (id, names) => {
		this.props.nameCompanyFilter(names);

		this.setState({
			isActive: true,
			selected: id
		})
	};

	onClick = () => {
		this.props.resetAll();
		this.setState({
			isActive: false
		})
	};

	render() {
		return (
			<div className="sidebar">
				<div className="card border-secondary mb-3">
					<div className="card-header">Company Name</div>
					<div className="btn-group-vertical" role="group" aria-label="Basic example">
						{
							this.props.nameCompany.map((item) => {
								return <SearchCompany key={item.id}
								                      id={item.id}
								                      selected={this.state.selected}
								                      names={item.company}
								                      handleClick={this.handleClick}
								/>
							})
						}
					</div>
				</div>

				<div className="card border-light mb-3">
					<div className="card-header">Stock</div>
					<div className="btn-group-vertical" role="group" aria-label="Basic example">
						<button
							className="btn btn-light"
							onClick={this.props.inStock}
						>
							In Stock
						</button>
						<button
							className="btn btn-light"
							onClick={this.props.outStock}
						>
							Out Stock
						</button>
						<button
							className="btn btn-outline-danger"
							onClick={this.props.resetStock}
						>
							Reset
						</button>
					</div>
				</div>

				<div className="card border-light mb-3">
					<div className="card-header">Sort alphabetically</div>
					<div className="btn-group-vertical" role="group" aria-label="Basic example">
						<button
							className="btn btn-light"
							onClick={this.props.aZ}
						>
							A-Z
						</button>
						<button
							className="btn btn-light"
							onClick={this.props.zA}
						>
							Z-A
						</button>
						<button
							className="btn btn-outline-danger"
							onClick={this.props.resetSort}
						>
							Reset
						</button>
					</div>
				</div>

				<button
					className="btn btn-danger btn-block"
					onClick={this.onClick}
				>
					Reset all
				</button>
			</div>
		)
	}
};