import React from 'react';

import '../styleComponents.css';

const SearchCompany = ({ names, nameCompanyFilter }) => {
	return (
		<>
			<button
				className="btn btn-light"
				onClick={() => nameCompanyFilter(names)}
			>
				{ names }
			</button>
		</>
	)
};

export default SearchCompany;
