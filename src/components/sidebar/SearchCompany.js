import React from 'react';

import '../styleComponents.css';

const SearchCompany = (props) => {
	return (
		<>
			<button className="btn btn-light">{props.names}</button>
		</>
	)
};

export default SearchCompany;