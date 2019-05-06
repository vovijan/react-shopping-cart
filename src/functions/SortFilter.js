export function applyFilter(data, company) {
	if (!company) return data;

	return data.filter(item => item.company === company);
}

export function getSortFunc(direction) {
	switch (direction) {
		case 'aZ': return (first, second) => {
			const nameA = first.name.toLowerCase();
			const nameB = second.name.toLowerCase();
			console.log(nameA);
			if (nameA < nameB) {
				return -1;
			}
			return 0;
		};
		case 'zA': return (first, second) => {
			const nameA = first.name.toLowerCase();
			const nameB = second.name.toLowerCase();
			console.log(nameA);
			if (nameA > nameB) {
				return -1;
			}
			return 0;};
		default: return () => 0;
	}
}