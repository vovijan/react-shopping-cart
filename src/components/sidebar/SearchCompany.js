import React from 'react';

import '../styleComponents.css';

const SearchCompany = ({ names, nameCompanyFilter, selected, id, handleClick }) => {
	return (
		<>
			<button
				className={`btn btn-light ${selected === id ? 'active' : null}`}
				onClick={() => { handleClick(id, names) }}
			>
				{names}
			</button>
		</>
	)
};

export default SearchCompany;