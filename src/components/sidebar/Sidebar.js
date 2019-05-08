import React, { Component } from 'react';
import SearchCompany from "./SearchCompany";

import '../styleComponents.css';

export default class Sidebar extends Component {

	state = {
		isActive: false
	};

	handleClick = () => {
		this.setState({
			isActive: true
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
				<div className="card border-secondary mb-3" style={{maxWidth: '25rem'}}>
					<div className="card-header">Company Name</div>
					<div className="btn-group-vertical" role="group" aria-label="Basic example" onClick={this.handleClick}>
						{
							this.props.nameCompany.map((item) => {
								return <SearchCompany
									key={item.id}
									names={item.company}
									nameCompanyFilter={this.props.nameCompanyFilter}

								/>
							})
						}
					</div>
				</div>

				{
					this.state.isActive ?
						<>
							<div className="card border-light mb-3" style={{maxWidth: '25rem'}}>
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

							<div className="card border-light mb-3" style={{maxWidth: '25rem'}}>
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
								onClick={ this.onClick }
							>
								Reset all
							</button>
						</> : null
				}
			</div>
		)
	}
};
