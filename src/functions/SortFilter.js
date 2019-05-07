/*export const applyFilter = (data, company, stock) => {
	return data.filter(item => company === 'all' || item.company === company).filter(item => stock === 'all' || item.inStock === stock)
	// return data.filter(item => company ? item.company === company : );
}*/

export const applyFilter = (data, company) => {
	if (!company) return data;

	return data.filter(item => item.company === company);
};

export const getSortFunc = (direction) => {
	switch (direction) {
		case 'aZ':
			return (first, second) => {
				const nameA = first.name.toLowerCase();
				const nameB = second.name.toLowerCase();
				if (nameA < nameB) {
					return -1;
				}
				return 0;
			};
		case 'zA':
			return (first, second) => {
				const nameA = first.name.toLowerCase();
				const nameB = second.name.toLowerCase();
				if (nameA > nameB) {
					return -1;
				}
				return 0;
			};
		default:
			return () => 0;
	}
};

//export const filterStock = ()