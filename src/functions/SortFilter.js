export function applyFilter(data, company) {
	if (!company) return data;

	return data.filter(item => item.company === company);
}

export function getSortFunc(direction) {
	switch (direction) {
		case 'A-z': return (a, b) => {};
		case 'z-A': return (a, b) => {};
		default: return () => 0;
	}
}