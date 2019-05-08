import React from 'react';

const FilterStock = ({ inStock, outStock, resetStock, selected, selectedStockClick }) => {
	return (
		<div className="card border-light mb-3">
			<div className="card-header">Stock</div>
			<div className="btn-group-vertical" role="group" aria-label="Basic example">
				<button
					className={`btn btn-light ${selected ? 'active' : null}`}
					onClick={selectedStockClick}
				>
					In Stock
				</button>
				<button
					className={`btn btn-light ${selected ? 'active' : null}`}
					onClick={selectedStockClick}
				>
					Out Stock
				</button>
				<button
					className="btn btn-outline-danger"
					onClick={resetStock}
				>
					Reset
				</button>
			</div>
		</div>
	)
};

export default FilterStock;