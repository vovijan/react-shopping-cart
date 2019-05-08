import React from 'react';

const SortProductList = ({ aZ, zA, resetSort }) => {
	return (
		<div className="card border-light mb-3">
			<div className="card-header">Sort alphabetically</div>
			<div className="btn-group-vertical" role="group" aria-label="Basic example">
				<button
					className="btn btn-light"
					onClick={aZ}
				>
					A-Z
				</button>
				<button
					className="btn btn-light"
					onClick={zA}
				>
					Z-A
				</button>
				<button
					className="btn btn-outline-danger"
					onClick={resetSort}
				>
					Reset
				</button>
			</div>
		</div>
	)
};

export default SortProductList