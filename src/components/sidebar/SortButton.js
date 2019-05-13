import React from 'react';

export const SortButton = ({ children, handleClick, isActive, isDanger }) => {
	return (
		<button
			className={`btn ${isDanger ? 'btn-outline-danger' : 'btn-light'} ${isActive ? 'active' : ''}`}
			onClick={ handleClick }
		>
			{ children }
		</button>
	)
};
