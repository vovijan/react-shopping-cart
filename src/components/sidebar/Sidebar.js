import React from 'react';
import SearchCompany from "./SearchCompany";

import '../styleComponents.css';

const Sidebar = ({ nameCompany, inStock, outStock }) => {
	return (
		<div className="sidebar">
			<div className="card border-secondary mb-3" style={{maxWidth: '25rem'}}>
				<div className="card-header">Sort alphabetically</div>
				<div className="btn-group-vertical" role="group" aria-label="Basic example">
					<button className="btn btn-light">A-Z</button>
					<button className="btn btn-light">Z-A</button>
				</div>
			</div>

			<div className="card border-secondary mb-3" style={{maxWidth: '25rem'}}>
				<div className="card-header">Company Name</div>
				<div className="btn-group-vertical" role="group" aria-label="Basic example">
					{
						nameCompany.map(({ id, company, nameCompanyFilter}) => {
							return <SearchCompany
											key={id}
											names={company}
											nameCompanyFilter={nameCompanyFilter}
										/>
						})
					}
				</div>
			</div>

			<div className="card border-secondary mb-3" style={{maxWidth: '25rem'}}>
				<div className="card-header">Stock</div>
				<div className="btn-group-vertical" role="group" aria-label="Basic example">
					<button
						className="btn btn-light"
						onClick={inStock}
					>
						In Stock
					</button>
					<button
						className="btn btn-light"
						onClick={outStock}
					>
						Out Stock
					</button>
				</div>
			</div>
		</div>
	)
};

export default Sidebar;