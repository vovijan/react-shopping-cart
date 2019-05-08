import React, { Component } from 'react';
import SearchCompany        from "./SearchCompany";
import FilterStock          from "./FilterStock";

import '../styleComponents.css';
import SortProductList from "./SortProductList";

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

				<FilterStock
					inStock     ={this.props.inStock}
					outStock    ={this.props.outStock}
					resetStock  ={this.props.resetStock}
				/>

				<SortProductList
					aZ         ={this.props.aZ}
					zA         ={this.props.zA}
					resetSort  ={this.props.resetSort}
				/>

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