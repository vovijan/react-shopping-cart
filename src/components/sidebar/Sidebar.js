import React from 'react';

import '../styleComponents.css';
import SearchCompany from "./SearchCompany";

const Sidebar = (props) => {
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
						props.nameCompany.map(item => {
							return <SearchCompany key={item.id} names={item.company} />
						})
					}
				</div>
			</div>

			<div className="card border-secondary mb-3" style={{maxWidth: '25rem'}}>
				<div className="card-header">Stock</div>
				<div className="btn-group-vertical" role="group" aria-label="Basic example">
					<button className="btn btn-light">In Stock</button>
					<button className="btn btn-light">Out Stock</button>
				</div>
			</div>
		</div>
	)
};

export default Sidebar;