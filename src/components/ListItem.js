import React from 'react';

const ListItem = (props) => {
	return (
		<div className="card" style={{width: '18rem'}}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Название карточки</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<button className="btn btn-primary">Переход куда-нибудь</button>
			</div>
		</div>
	);
};

export default ListItem;