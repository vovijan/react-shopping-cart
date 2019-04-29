import React from 'react';
import SearchCompany from "./SearchCompany";

import '../styleComponents.css';

const Sidebar = (props) => {
	return (
		<div className="sidebar">
			<div className="card border-secondary mb-3" style={{maxWidth: '25rem'}}>
				<div className="card-header">Sort alphabetically</div>
				<div className="btn-group-vertical" role="group" aria-label="Basic example">
					<button
						className="btn btn-light"
						onClick={props.aZ}
					>
						A-Z
					</button>
					<button
						className="btn btn-light"
						onClick={props.zA}
					>
						Z-A
					</button>
				</div>
			</div>

			<div className="card border-secondary mb-3" style={{maxWidth: '25rem'}}>
				<div className="card-header">Company Name</div>
				<div className="btn-group-vertical" role="group" aria-label="Basic example">
					{
						props.nameCompany.map((item) => {
							return <SearchCompany
											key={item.id}
											names={item.company}
											nameCompanyFilter={item.nameCompanyFilter}
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
						onClick={props.inStock}
					>
						In Stock
					</button>
					<button
						className="btn btn-light"
						onClick={props.outStock}
					>
						Out Stock
					</button>
				</div>
			</div>
		</div>
	)
};

export default Sidebar;