import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/sidebar/Sidebar';
import { inStock, outStock } from "../redux/actions";

const mapStateToProps = state => {

	/*const nameCompany = [];

	state.goods.forEach(item => {
		const found = nameCompany.find(i => i.company === item.company);
		if (!found) {
			nameCompany.push({
				id: item.id,
				company: item.company
			});
		}
	});

	return {nameCompany};*/

	//nameCompany: state.goods

  const nameCompany = state.goods.filter(item => item.inStock);

  return {nameCompany};

};

const mapDispatchToProps = dispatch => ({
	inStock: () => {
		dispatch(inStock());
	},
  outStock: () => {
	  dispatch(outStock());
  }
});

const SidebarContainer = ({ nameCompany, inStock, outStock }) =>
  <Sidebar
    nameCompany={nameCompany}
    inStock={inStock}
    outStock={outStock}
  />;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SidebarContainer);