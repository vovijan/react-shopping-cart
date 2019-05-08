import React, { Component } from 'react';
import SearchCompany        from "./SearchCompany";
import FilterStock          from "./FilterStock";
import SortProductList      from "./SortProductList";

import '../styleComponents.css';

export default class Sidebar extends Component {

	state = {
		selected:      null,
		selectedStock: false
	};

	handleClick = (id, names) => {
		this.props.nameCompanyFilter(names);

		this.setState({
			selected: id
		})
	};

	selectedStockClick = () => {
		this.setState({
			selectedStock: !this.state.selectedStock
		})
	};

	render() {
		return (
			<div className="sidebar">
				<div className="card border-light mb-3">
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
					<button
						className="btn btn-outline-danger"
						onClick={() => {
							this.props.nameCompanyFilter('');
							this.setState({
								selected: null
							})
						}}
					>
						Reset all
					</button>
				</div>

				<FilterStock
					inStock           ={this.props.inStock}
					outStock          ={this.props.outStock}
					resetStock        ={this.props.resetStock}
					selected          ={this.state.selectedStock}
					selectedStockClick={this.selectedStockClick}
				/>

				<SortProductList
					aZ         ={this.props.aZ}
					zA         ={this.props.zA}
					resetSort  ={this.props.resetSort}
					selected   ={this.state.selected}
				/>

				<button
					className="btn btn-danger btn-block"
					onClick={() => {
						this.props.resetAll();
						this.setState({
							selected: null
						})
					}}
				>
					Reset all
				</button>
			</div>
		)
	}
};