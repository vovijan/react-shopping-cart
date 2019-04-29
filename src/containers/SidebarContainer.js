import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/sidebar/Sidebar';
import { inStock, outStock, nameCompanyFilter } from "../redux/actions";

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

	//nameCompany: state.goods

 // const nameCompany = state.goods.filter(item => item.inStock);

  //return {nameCompany};

};

const mapDispatchToProps = dispatch => ({
	inStock: () => {
		dispatch(inStock());
	},
  outStock: () => {
	  dispatch(outStock());
  },
	nameCompanyFilter: (company) => {
		dispatch(nameCompanyFilter({company}));
	}
});

const SidebarContainer = ({ nameCompany, inStock, outStock, nameCompanyFilter }) =>
  <Sidebar
    nameCompany={nameCompany}
    inStock={inStock}
    outStock={outStock}
		nameCompanyFilter={nameCompanyFilter}
  />;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SidebarContainer);