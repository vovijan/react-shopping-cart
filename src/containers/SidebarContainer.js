import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/sidebar/Sidebar';
import {
	aZ,
	zA,
	inStock,
	outStock,
	nameCompanyFilter,
	resetStock,
	resetSort,
	resetAll
} from "../redux/actions";

const mapStateToProps = state => {

	const nameCompany = [];

	state.goods.forEach(item => {
		const found = nameCompany.find(i => i.company === item.company);
		if (!found) {
			nameCompany.push({
				id: item.id,
				company: item.company
			});
		}
	});

	return {nameCompany};

};

const mapDispatchToProps = dispatch => ({

	aZ: () => {
		dispatch(aZ());
	},

	zA: () => {
		dispatch(zA());
	},

	inStock: () => {
		dispatch(inStock());
	},

  outStock: () => {
	  dispatch(outStock());
  },

	nameCompanyFilter: (names) => {
		dispatch(nameCompanyFilter({names}));
	},

	resetStock: () => {
		dispatch(resetStock(''));
	},

	resetSort: () => {
		dispatch(resetSort(''));
	},

	resetAll: () => {
		dispatch(resetAll(''));
	}

});

const SidebarContainer = (
	{
		nameCompany,
		inStock,
		outStock,
		nameCompanyFilter,
		aZ,
		zA,
		resetStock,
		resetSort,
		resetAll
	}) =>
  <Sidebar
    nameCompany={nameCompany}
		aZ={aZ}
		zA={zA}
    inStock={inStock}
    outStock={outStock}
		nameCompanyFilter={nameCompanyFilter}
    resetStock={resetStock}
    resetSort={resetSort}
    resetAll={resetAll}
  />;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SidebarContainer);