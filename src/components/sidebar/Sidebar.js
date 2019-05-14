import React, { Component } from 'react';
import SearchCompany        from "./SearchCompany";
import { FilterButton } 		from "./FilterButton";
import {SortButton}         from "./SortButton";

import '../styleComponents.css';

export default class Sidebar extends Component {

	state = {
		isActive: false,
		selected: null,
		stock: '',
		sort: ''
	};

	handleClick = (id, names) => {
		this.props.nameCompanyFilter(names);

		this.setState({
			isActive: true,
			selected: id
		})
	};

	handleClickStock = (param) => {
		if (param === 'inStock') {
			this.props.inStock();
		} else if (param === 'outStock') {
			this.props.outStock();
		} else if (param === 'resetStock') {
			this.props.resetStock();
		}
		this.setState({
			stock: param
		})
	};

	handleClickSort = (param) => {
		if (param === 'aZ') {
			this.props.aZ();
		} else if (param === 'zA') {
			this.props.zA();
		} else if (param === 'resetSort') {
			this.props.resetSort();
		}
		this.setState({
			sort: param
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
						Reset
					</button>
				</div>

				<div className="card border-light mb-3">
					<div className="card-header">Stock</div>
					<div className="btn-group-vertical" role="group" aria-label="Basic example">

						<FilterButton
							isActive={this.state.stock === 'inStock'}
							isDanger={false}
							handleClick={() => this.handleClickStock('inStock')}
						>
							In Stock
						</FilterButton>

						<FilterButton
							isActive={this.state.stock === 'outStock'}
							isDanger={false}
							handleClick={() => this.handleClickStock('outStock')}
						>
							Out Stock
						</FilterButton>

						<FilterButton
							isActive={false}
							isDanger={true}
							handleClick={() => this.handleClickStock('resetStock')}
						>
							Reset
						</FilterButton>

					</div>
				</div>

				<div className="card border-light mb-3">
					<div className="card-header">Sort</div>
					<div className="btn-group-vertical" role="group" aria-label="Basic example">

						<SortButton
							isActive={this.state.sort === 'aZ'}
							isDanger={false}
							handleClick={() => this.handleClickSort('aZ')}
						>
							A-Z
						</SortButton>

						<SortButton
							isActive={this.state.sort === 'zA'}
							isDanger={false}
							handleClick={() => this.handleClickSort('zA')}
						>
							Z-A
						</SortButton>

						<SortButton
							isActive={false}
							isDanger={true}
							handleClick={() => this.handleClickSort('resetSort')}
						>
							Reset
						</SortButton>

					</div>
				</div>

				<button
					className="btn btn-danger btn-block"
					onClick={() => {
						this.props.resetAll();
						this.setState({
							selected: null,
							stock: '',
							sort: ''
						})
					}}
				>
					Reset all
				</button>
			</div>
		)
	}
};
